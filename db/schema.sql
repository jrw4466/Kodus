
-- Create database 
CREATE DATABASE kodus_db;
USE kodus_db;

-- Create table
CREATE TABLE IF NOT EXISTS  kdsApplication
(
	id int(10) NOT NULL AUTO_INCREMENT,
	salutation VARCHAR(5) NOT NULL,
	firstName VARCHAR(50) NOT NULL,
	middleName VARCHAR(50),
	lastName VARCHAR(50) NOT NULL,
	maritalStatus VARCHAR(10),
	phone VARCHAR(12) NOT NULL,
	email VARCHAR(60) NOT NULL,
	kdsNum VARCHAR(10),
	kdsAddr VARCHAR(50) NOT NULL,
	kdsCity VARCHAR(50) NOT NULL,
	kdsState VARCHAR(3) NOT NULL,
	leaseLength INT(2) NOT NULL,
	numOccupants INT(2) NOT NULL,
	moveInDt VARCHAR(10) NOT NULL,
	curAddr1 VARCHAR(50) NOT NULL,
	curAddr2 VARCHAR(50),
	curAddrCity VARCHAR(50) NOT NULL,
	curAddrState VARCHAR(2) NOT NULL,
	curAddrZip INT(5) NOT NULL,
	curAddrYrs INT(2),
	curAddrRent INT(10),
	curAddrNoticeDays VARCHAR(5),
	curAddrReason VARCHAR(255),
	empStatus VARCHAR(15) NOT NULL,
	empIncome INT(10,2) NOT NULL,
	empAddlIncome INT(10,2),
	empAddlIncomeSource VARCHAR(50),
	empEmployerName VARCHAR(50),
	empJobTitle VARCHAR(50),
	empAddr1 VARCHAR(50),
	empAddr2 VARCHAR(50),
	empAddrCity VARCHAR(50),
	empAddrState VARCHAR(2),
	empAddrZip INT(5),
	empEmployedYrs INT(2),
	empSupervisor VARCHAR(50),
	empPhone VARCHAR(12),
	petNumn INT(5) NOT NULL,
	petDog VARCHAR(5),
	petCat VARCHAR(5),
	petBird VARCHAR(5),
	petFish VARCHAR(5),
	petOther VARCHAR(5),
	petOtherDesc VARCHAR(50),
	petSpayed VARCHAR(5),
	vehNum INT(5) NOT NULL,
	vehSedan VARCHAR(5),
	vehSUV VARCHAR(5),
	vehTruck VARCHAR(5),
	vehMotorcyle VARCHAR(5),
	vehOther VARCHAR(5),
	vehOtherDesc VARCHAR(50),
	applicationDt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);


-- Create table
CREATE TABLE IF NOT EXISTS  kdsMaintenance
(
	id int(10) NOT NULL AUTO_INCREMENT,
	firstName VARCHAR(50) NOT NULL,
	middleName VARCHAR(50),
	lastName VARCHAR(50) NOT NULL,
	phone VARCHAR(12) NOT NULL,
	email VARCHAR(60) NOT NULL,
	kdsNum VARCHAR(10),
	kdsAddr VARCHAR(50) NOT NULL,
	kdsCity VARCHAR(50) NOT NULL,
	kdsState VARCHAR(3) NOT NULL,
	maintenanceCategory VARCHAR(50) NOT NULL,
	maintenanceIssue VARCHAR(255),
	applItem VARCHAR(50),
	applMake VARCHAR(50),
	applModel VARCHAR(50),
	requestDt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);


