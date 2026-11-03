create extension if not exists pgcrypto;
create table if not exists campaign_customers (id uuid primary key default gen_random_uuid(), name text not null, email text not null, phone text not null, region text not null, seller_id uuid, created_at timestamptz not null default now(), unique (phone));
create unique index if not exists campaign_customers_email_lower_idx on campaign_customers (lower(email));
create table if not exists campaign_cards (id uuid primary key default gen_random_uuid(), customer_id uuid not null references campaign_customers(id) on delete cascade, campaign_key text not null default 'blue-friday-2026', available_labels integer not null default 0 check (available_labels >= 0), reserved_labels integer not null default 0 check (reserved_labels >= 0), updated_at timestamptz not null default now(), unique (customer_id, campaign_key));
create table if not exists label_ledger (id uuid primary key default gen_random_uuid(), card_id uuid not null references campaign_cards(id) on delete cascade, seller_id uuid, quantity integer not null check (quantity <> 0), action text not null check (action in ('issued','redeemed','reserved','released','adjusted')), order_reference text, note text, created_at timestamptz not null default now());
create index if not exists label_ledger_card_created_idx on label_ledger(card_id, created_at desc);

