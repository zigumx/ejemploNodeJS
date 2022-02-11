-- CreateTable
CREATE TABLE "Transaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "request_action" TEXT NOT NULL,
    "req_id" TEXT,
    "trans_status_name" TEXT,
    "trans_value" REAL,
    "curr_code_alpha" TEXT,
    "trans_value_settled" REAL,
    "curr_code_alpha_settled" TEXT,
    "trans_exch_rate" TEXT,
    "trans_id" INTEGER,
    "cust_id" INTEGER,
    "xtl_cust_id" TEXT,
    "po_id" INTEGER,
    "xtl_order_id" TEXT,
    "batch_id" INTEGER,
    "proc_name" TEXT,
    "merch_acct_id" INTEGER,
    "card_brand_name" TEXT,
    "card_type" TEXT,
    "card_prepaid" INTEGER,
    "card_bank" TEXT,
    "card_balance" TEXT,
    "pmt_l4" TEXT,
    "pmt_id" INTEGER,
    "pmt_id_xtl" TEXT,
    "proc_udf01" TEXT,
    "proc_udf02" TEXT,
    "proc_auth_response" TEXT,
    "proc_retrieval_num" TEXT,
    "proc_reference_num" TEXT,
    "proc_redirect_url" TEXT,
    "avs_response" TEXT,
    "cvv_response" TEXT,
    "request_api_version" TEXT,
    "p3ds_response" TEXT,
    "p3ds_vendor" TEXT,
    "mbshp_id_1" TEXT,
    "mbshp_id" TEXT,
    "api_response" TEXT,
    "api_advice" TEXT,
    "service_response" TEXT,
    "service_advice" TEXT,
    "processor_response" TEXT,
    "processor_advice" TEXT,
    "industry_response" TEXT,
    "industry_advice" TEXT,
    "ref_field" TEXT,
    "fullText" TEXT,
    "kount_sessionid" TEXT
);

-- CreateTable
CREATE TABLE "TransactionProducts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "po_li_id" TEXT NOT NULL,
    "po_li_count" TEXT NOT NULL,
    "po_li_amount" TEXT NOT NULL,
    "po_li_prod_id" TEXT NOT NULL,
    "transactionId" INTEGER,
    CONSTRAINT "TransactionProducts_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Token" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "token_guid" TEXT NOT NULL,
    "token_ip" TEXT NOT NULL,
    "token_reqid" TEXT NOT NULL
);
