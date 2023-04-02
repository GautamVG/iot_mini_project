drop table if exists `config`;
create table `config` (
    `parking_fee` float not null
);

drop table if exists `spots`;
create table `spots` (
    `name` varchar(2) not null primary key,
    `occupied` boolean not null
);

drop table if exists `tickets`;
create table `tickets` (
    `parking_spot_name` varchar(2) not null primary key references `spots`(`name`) on update cascade on delete cascade,
    `parking_fee` float not null,
    `start_time` timestamp not null
);

drop table if exists `receipts`;
create table `receipts` (
    `id` integer primary key,
    `parking_spot_name` varchar(2) not null references `spots`(`name`) on update cascade on delete cascade,
    `start_time` timestamp not null,
    `parking_fee` float not null,
    `end_time` timestamp not null,
    `time_parked` float not null,
    `amount` float not null,
    `payed` boolean not null default false
);

insert into `config` (`parking_fee`) values (7);

insert into `spots` (`name`, `occupied`) values
(
    'A1',
    false
),
(
    'A2',
    false
),
(
    'A3',
    false
);