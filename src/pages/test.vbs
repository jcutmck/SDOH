'**********
'JMC Test Dx Code Rule 10-5-23
'call message("JMC - START JMC RULE - VI")
'NOTE: PID below is for testing, needs to be changed to dynamic value from PM field value for PID
'DEBUG* 
'call message(querystring)
'**********
dim lendxfield as string
dim lencptfield as string
dim dxquery1 as string
dim dxcnt as double
dim dxdecrement as double

'dim tempdx as string
dim dxstring as string
dim dxquery2 as string
dim dxquery3 as string

dim cptquery1 as string
dim cptcnt as double
dim cptdecrement as double

'dim tempcpt as string
dim cptstring as string
dim cptquery2 as string
dim cptquery3 as string

'**********
'Check if Field to be filled is blank (Dx Code in PM Conv) 
' need to change field below for correct field for Dx Code in PM Conv
'**********
lendxfield = len(getvalue("PERSON.ENCOUNTER.COMMENT_07.LONG_TEXT")) 

'**********
'If Dx Code field is blank, run query to count how many dx codes are on the OEF for us to process into PM
'**********
if lendxfield = 0 then
  dxquery1 = "select count(nom.source_identifier) from sch_appt sa, sch_event_attach sea, order_detail od, nomenclature nom"
  dxquery1 = dxquery1 & " where sa.person_id = 17620740 and sa.beg_dt_tm> cnvtdatetime(curdate,curtime3) and" 
  dxquery1 = dxquery1 & " sa.beg_effective_dt_tm > cnvtdatetime(curdate,000000) and sa.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) and sa.sch_state_cd=2064.00 and"
  dxquery1 = dxquery1 & " sea.sch_event_id=sa.sch_event_id and sea.end_effective_dt_tm > cnvtdatetime(curdate,curtime3)"
  dxquery1 = dxquery1 & " and sea.order_id = od.order_id and and od.oe_field_meaning = ""ICD9"" and nom.nomenclature_id = od.oe_field_value"
  dxquery1 = dxquery1 & " and nom.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) with time=10"

'**********
'Set Count of Dx codes = dxcnt
'create a decrement version for the loop
'**********
  dxcnt = ccl(dxquery1)
  dxdecrement = dxcnt


  if dxcnt > 0 then
    dxstring = "DX: "
    'iterate through Dx Codes & Descriptions
    for x=1 to dxcnt 
        'Dx code query (dxquery2)
        dxquery2 = "select nom.source_identifier from sch_appt sa, sch_event_attach sea, order_detail od, nomenclature nom"
        dxquery2 = dxquery2 & " where sa.person_id = 17620740 and sa.beg_dt_tm> cnvtdatetime(curdate,curtime3) and" 
        dxquery2 = dxquery2 & " sa.beg_effective_dt_tm > cnvtdatetime(curdate,000000) and sa.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) and sa.sch_state_cd=2064.00 and"
        dxquery2 = dxquery2 & " sea.sch_event_id=sa.sch_event_id and sea.end_effective_dt_tm > cnvtdatetime(curdate,curtime3)"
        dxquery2 = dxquery2 & " and sea.order_id = od.order_id and and od.oe_field_meaning = ""ICD9"" and nom.nomenclature_id = od.oe_field_value"
        dxquery2 = dxquery2 & " and nom.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) with time=10, maxrec=" & dxdecrement 

        dxstring = dxstring & cstr(ccl(dxquery2)) & " -- "

        'Dx description query (dxquery3)
        dxquery3 = "select od.oe_field_value from sch_appt sa, sch_event_attach sea, order_detail od, nomenclature nom"
        dxquery3 = dxquery3 & " where sa.person_id = 17620740 and sa.beg_dt_tm> cnvtdatetime(curdate,curtime3) and" 
        dxquery3 = dxquery3 & " sa.beg_effective_dt_tm > cnvtdatetime(curdate,000000) and sa.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) and sa.sch_state_cd=2064.00 and"
        dxquery3 = dxquery3 & " sea.sch_event_id=sa.sch_event_id and sea.end_effective_dt_tm > cnvtdatetime(curdate,curtime3)"
        dxquery3 = dxquery3 & " and sea.order_id = od.order_id and and od.oe_field_meaning = ""ICD9"" and nom.nomenclature_id = od.oe_field_value"
        dxquery3 = dxquery3 & " and nom.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) with time=10, maxrec=" & dxdecrement

        dxstring = dxstring & cstr(ccl(dxquery3)) & ", "
        dxdecrement -= dxdecrement
    next

    '' call setvalue("<DIAGNOSIS CD FIELD>",cptstring) 

'**********
'Check if Field to be filled is blank (CPT Code in PM Conv) 
' need to change field below for correct field for CPT Code in PM Conv
'**********
lencptfield = len(getvalue("PERSON.ENCOUNTER.COMMENT_07.LONG_TEXT"))  

'**********
'If CPT Code field is blank, run query to count how many dx codes are on the OEF for us to process into PM
'**********
if lencptfield = 0 then
  cptquery1 = "select count(nom.source_identifier) from sch_appt sa, sch_event_attach sea, order_detail od, nomenclature nom"
  cptquery1 = cptquery1 & " where sa.person_id = 17620740 and sa.beg_dt_tm> cnvtdatetime(curdate,curtime3) and" 
  cptquery1 = cptquery1 & " sa.beg_effective_dt_tm > cnvtdatetime(curdate,000000) and sa.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) and sa.sch_state_cd=2064.00 and"
  cptquery1 = cptquery1 & " sea.sch_event_id=sa.sch_event_id and sea.end_effective_dt_tm > cnvtdatetime(curdate,curtime3)"
  cptquery1 = cptquery1 & " and sea.order_id = od.order_id and and od.oe_field_meaning = ""SURG-CPT"" and nom.nomenclature_id = od.oe_field_value"
  cptquery1 = cptquery1 & " and nom.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) with time=10"


'**********
'Set Count of CPT codes = cptcnt
'create a decrement of count for maxrec movement over iterations
'**********
  cptcnt = ccl(cptquery1)
  cptdecrement = cptcnt

  if cptcnt > 0 then
    cptstring = "CPT: "
    'iterate through Dx Codes & Descriptions
    for x=1 to cptcnt 
        'CPT code query (cptquery2)
        cptquery2 = "select nom.source_identifier from sch_appt sa, sch_event_attach sea, order_detail od, nomenclature nom"
        cptquery2 = cptquery2 & " where sa.person_id = 17620740 and sa.beg_dt_tm> cnvtdatetime(curdate,curtime3) and" 
        cptquery2 = cptquery2 & " sa.beg_effective_dt_tm > cnvtdatetime(curdate,000000) and sa.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) and sa.sch_state_cd=2064.00 and"
        cptquery2 = cptquery2 & " sea.sch_event_id=sa.sch_event_id and sea.end_effective_dt_tm > cnvtdatetime(curdate,curtime3)"
        cptquery2 = cptquery2 & " and sea.order_id = od.order_id and and od.oe_field_meaning = ""SURG-CPT"" and nom.nomenclature_id = od.oe_field_value"
        cptquery2 = cptquery2 & " and nom.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) with time=10, maxrec=" & cptdecrement 

        cptstring = cptstring & cstr(ccl(cptquery2)) & " -- "

        'Dx description query (cptquery3)
        cptquery3 = "select od.oe_field_value from sch_appt sa, sch_event_attach sea, order_detail od, nomenclature nom"
        cptquery3 = cptquery3 & " where sa.person_id = 17620740 and sa.beg_dt_tm> cnvtdatetime(curdate,curtime3) and" 
        cptquery3 = cptquery3 & " sa.beg_effective_dt_tm > cnvtdatetime(curdate,000000) and sa.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) and sa.sch_state_cd=2064.00 and"
        cptquery3 = cptquery3 & " sea.sch_event_id=sa.sch_event_id and sea.end_effective_dt_tm > cnvtdatetime(curdate,curtime3)"
        cptquery3 = cptquery3 & " and sea.order_id = od.order_id and and od.oe_field_meaning = ""SURG-CPT"" and nom.nomenclature_id = od.oe_field_value"
        cptquery3 = cptquery3 & " and nom.end_effective_dt_tm > cnvtdatetime(curdate,curtime3) with time=10, maxrec=" & cptdecrement

        cptstring = cptstring & cstr(ccl(cptquery3)) & ", "
        cptdecrement -= cptdecrement
    next
    
    '' call setvalue("<CPT CD FIELD>",cptstring) 
  end if

end if