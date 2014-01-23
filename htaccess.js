SetEnvIf Remote_Addr "^XXX\.XXX\.XXX\.XXX" GrantAccessModified
Order allow,deny
allow from env=GrantAccessModified
ErrorDocument 403 /error.html
# Замените "^XXX\.XXX\.XXX\.XXX" на нужные ip адресa 
# Например "^123\.123\.123\.123"
# error.html Сюда будут перенаправляться при неправильном ip
<------------------------------------------------------------->
<--    Скрипт был разработан при участии @Deee  @P2n33D     -->
<--Написание скриптов любой сложности на заказ : buy@deee.su-->
<------------------------------------------------------------->
