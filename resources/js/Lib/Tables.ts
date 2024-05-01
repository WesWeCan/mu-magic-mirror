export const labelTable = {
    0: "left_face",
    1: "right_face",
    2: "left_upper_arm_front",
    3: "left_upper_arm_back",
    4: "right_upper_arm_front",
    5: "right_upper_arm_back",
    6: "left_lower_arm_front",
    7: "left_lower_arm_back",
    8: "right_lower_arm_front",
    9: "right_lower_arm_back",
    10: "left_hand",
    11: "right_hand",
    12: "torso_front",
    13: "torso_back",
    14: "left_upper_leg_front",
    15: "left_upper_leg_back",
    16: "right_upper_leg_front",
    17: "right_upper_leg_back",
    18: "left_lower_leg_front",
    19: "left_lower_leg_back",
    20: "right_lower_leg_front",
    21: "right_lower_leg_back",
    22: "left_feet",
    23: "right_feet"
};


export const labelTableCombinations = {
    "head": [0, 1],
    "left_arm": [2, 3, 6, 7, 10],
    "right_arm": [4, 5, 8, 9, 11],
    "torso": [12, 13],
    "left_leg": [14, 15, 18, 19, 22],
    "right_leg": [16, 17, 20, 21, 23]
};


export const COCOKeypoints = {
    0: "nose",
    1: "left_eye",
    2: "right_eye",
    3: "left_ear",
    4: "right_ear",
    5: "left_shoulder",
    6: "right_shoulder",
    7: "left_elbow",
    8: "right_elbow",
    9: "left_wrist",
    10: "right_wrist",
    11: "left_hip",
    12: "right_hip",
    13: "left_knee",
    14: "right_knee",
    15: "left_ankle",
    16: "right_ankle"
}

export const COCOKeypointsCombinations = {
    "head": [0, 1, 2, 3, 4],
    "left_arm": [5, 7, 9],
    "right_arm": [6, 8, 10],
    "torso": [5, 6, 11, 12],
    "left_leg": [11, 13, 15],
    "right_leg": [12, 14, 16]
}
