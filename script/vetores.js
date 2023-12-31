// Vetor de Identificação do Animal
var vetID = ['1IN3', 'C2O2', 'YKQL', 'NDS2', 'O5OF', 'CYC3', 'KS24', 'I20Y', 'VN17', 'GL6T', 'LHC0', '0R8U', 'FHUV', 'XKAM', 'LUN5', 'Q3SS', '61LZ', '5WFF', 'YR6Z', '27KD', 'MEJT', '56XH', 'MYGA', 'DX8W', 'G4VR', 'UHLB', 'GDZN', '556R', 'R28P', 'TNN2', 'B0YS', 'C98Z', 'CYEK', '6RU5', 'E1QW', 'EYU9', '7WDO', 'ZLIR', 'C60O', 'XUU8', 'KPFZ', 'AM1X', 'EG3H', 'SF36', 'QYYV', 'C5VW', 'K4TR', '0F06', 'GCWT', 'ZXA5', 'LTF6', 'ENAI', 'GPH2', 'YEHH', 'FQ6G', 'C3UD', 'AISF', 'C5QS', 'DX2D', 'T1YV', 'UNYB', 'YWXC', 'AFDX', '4YFA', '5Z1U', 'BC7P', 'XGLK', 'KCDE', 'WDDX', 'MEA4', 'J5FX', 'KI55', '60N5', 'NT10', '4V1J', 'TVNS', 'HNRN', 'SA1V', 'A3S2', 'RS3J', 'SLKT', '2D63', '1Z4D', '6E24', 'I5PC', 'Q69L', 'HWHR', 'HBNG', 'U08R', 'FKOU', '8P23', '1IIU', 'QT7P', '41Q9', 'A03Z', 'DKQN', '346T', 'TZ5M', 'VG3X', '1SNJ'];

// Vetor da Arroba do Inicio do Período de Engorda
var vetINI = [11, 10, 11, 13, 10, 11, 12, 11, 12, 12, 12, 11, 11, 10, 12, 13, 11, 11, 11, 11, 12, 13, 12, 10, 12, 11, 13, 12, 11, 12, 11, 12, 11, 11, 12, 13, 11, 11, 12, 11, 10, 11, 12, 12, 11, 11, 13, 12, 12, 11, 11, 11, 13, 11, 11, 11, 12, 12, 11, 13, 13, 13, 12, 11, 11, 11, 12, 12, 12, 11, 11, 12, 11, 12, 11, 13, 11, 12, 12, 11, 11, 12, 10, 11, 12, 10, 11, 10, 11, 12, 12, 12, 12, 11, 12, 11, 12, 11, 12, 11];

// Vetor da Arroba do Final do Período de Engorda
var vetFinal = [23, 26, 18, 25, 24, 19, 25, 19, 21, 18, 22, 28, 19, 27, 25, 27, 25, 21, 17, 27, 20, 23, 23, 22, 21, 27, 21, 21, 22, 20, 23, 24, 21, 18, 24, 25, 22, 22, 19, 21, 27, 24, 27, 24, 22, 26, 24, 22, 24, 22, 21, 25, 21, 20, 25, 25, 26, 20, 23, 20, 29, 23, 21, 21, 23, 21, 26, 27, 28, 20, 20, 25, 21, 28, 19, 25, 21, 21, 23, 27, 20, 23, 24, 24, 22, 22, 22, 22, 30, 19, 22, 20, 22, 22, 24, 26, 21, 23, 22, 28];

// Vetor da Espécie do Animal
var vetEspecie = ['Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore', 'Hereford', 'Angus', 'Nelore'];

// Verifica se os dados já foram armazenados na sessionStorage
if (!sessionStorage.getItem('dataStored')) {

    // Armazena os dados na sessionStorage se ainda não foram armazenados
    sessionStorage.setItem("vetID", JSON.stringify(vetID));
    sessionStorage.setItem("vetINI", JSON.stringify(vetINI));
    sessionStorage.setItem("vetFinal", JSON.stringify(vetFinal));
    sessionStorage.setItem("vetEspecie", JSON.stringify(vetEspecie));

    // Confirma que os dados foram armazenados
    sessionStorage.setItem('dataStored', 'true');
}