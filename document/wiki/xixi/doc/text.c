/*
 * @Author: xixi_
 * @Date: 2024-12-07 16:03:58
 * @LastEditors: xixi_
 * @LastEditTime: 2024-12-07 16:07:17
 * @FilePath: /opennessgames.github.io/document/wiki/xixi/doc/text.c
 * Copyright (c) 2020-2024 by xixi_ , All Rights Reserved.
 */
#include <xixi/Stack/Stack.h>
#include <stdlib.h>
int main()
{
    ThisStack s;                     /* 创建一个栈实例 */
    XIXI_StackInit(&s);              /* 初始化 */
    XIXI_StackPush(&s, "TestToken"); /* 推入 */
    XIXI_StackPush(&s, "TestToken");
    XIXI_StackAppendVal(&s, "0");    /* 追加 */
    XIXI_StackPush(&s, "TestToken"); /* 推入 */
    free(XIXI_StackPop(&s));         /* 弹出栈顶字符 */
    XIXI_StackPrint(&s);             /* 打印栈 */
    XIXI_StackFree(&s);              /* 释放栈 */
    return 0;
}