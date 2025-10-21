package com.bms.banking.service.mapper;

import com.bms.banking.dto.AccountDto;
import com.bms.banking.entity.Account;

public class AccountMapper {

    public static Account mapToAccount(AccountDto accountDto) {
        return new Account(
                accountDto.getId(),
                accountDto.getAccountHolderName(),
                accountDto.getBalance()
        );
    }

    public static AccountDto mapToAccountDto(Account saveAccount) {
        return new AccountDto(
                saveAccount.getId(),
                saveAccount.getAccountHolderName(),
                saveAccount.getBalance()
        );
    }
}
