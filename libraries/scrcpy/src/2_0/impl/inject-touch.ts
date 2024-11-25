import type { StructInit } from "@yume-chan/struct";
import { struct, u16, u32, u64, u8 } from "@yume-chan/struct";

import type { AndroidMotionEventAction } from "../../android/motion-event.js";
import type { ScrcpyInjectTouchControlMessage } from "../../latest.js";

import { PrevImpl } from "./prev.js";

export const InjectTouchControlMessage = struct(
    {
        type: u8,
        action: u8<AndroidMotionEventAction>(),
        pointerId: u64,
        pointerX: u32,
        pointerY: u32,
        screenWidth: u16,
        screenHeight: u16,
        pressure: PrevImpl.UnsignedFloat,
        actionButton: u32,
        buttons: u32,
    },
    { littleEndian: false },
);

export type InjectTouchControlMessage = StructInit<
    typeof InjectTouchControlMessage
>;

export function serializeInjectTouchControlMessage(
    message: ScrcpyInjectTouchControlMessage,
): Uint8Array {
    return InjectTouchControlMessage.serialize(message);
}
