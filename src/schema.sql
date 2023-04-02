drop table if exists `spots`;
create table `spots` (
    `name` varchar(2) not null primary key,
    `occupied` boolean not null
);

drop table if exists `tickets`;
create table `tickets` (
    `parking_spot_name` varchar(2) not null primary key references `spots`(`name`) on update cascade on delete cascade,
    `start_time` timestamp not null
);

drop table if exists `receipts`;
create table `receipts` (
    `parking_spot_name` varchar(2) not null references `spots`(`name`) on update cascade on delete cascade,
    `start_time` timestamp not null,
    `end_time` timestamp not null,
    `time_parked` float not null,
    `parking_fee` float not null,
    `amount` float not null
);

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