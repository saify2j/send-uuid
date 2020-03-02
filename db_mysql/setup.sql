CREATE TABLE `uuid_table` (
  `id` int(11) NOT NULL,
  `uuid` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `uuid_table`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `uuid_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
