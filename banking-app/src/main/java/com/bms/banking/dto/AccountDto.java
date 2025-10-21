package com.bms.banking.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AccountDto {
    private Long id;
    private String accountHolderName;
    private double balance;

}
