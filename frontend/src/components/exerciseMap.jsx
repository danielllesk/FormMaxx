import BarbellCurlsImage from '../assets/biceps/BarbellCurls.png';
import HammerCurlsImage from '../assets/biceps/HammerCurls.jpeg';
import PreacherCurlsImage from '../assets/biceps/PreacherCurls.jpeg';
import JMPressImage from '../assets/triceps/JMPress.png';
import TricepPushdownImage from '../assets/triceps/TricepPushdown.png';
import OverheadTricepsExtensionImage from '../assets/triceps/OverheadTricepsExtension.png';
import MachineShoulderPressImage from '../assets/shoulders/MachineShoulderPress.png';
import LateralRaisesImage from '../assets/shoulders/LateralRaises.png';
import RearDeltFlyImage from '../assets/shoulders/RearDeltFly.png';
import BenchPressImage from '../assets/chest/BenchPress.png';
import InclineDumbbellPressImage from '../assets/chest/InclineDumbbellPress.png';
import bentOverRowImage from '../assets/upperBack/bentOverRow.png';
import facePullImage from '../assets/upperBack/facePull.png';
import pullUpImage from '../assets/upperBack/pullUps.png';
import shrugsImage from '../assets/traps/shrugs.jpg';
import uprightRowImage from '../assets/traps/upRightRows.jpeg';
import ChestFlyImage from '../assets/chest/ChestFly.png';
import PlankImage from '../assets/abdomen/Plank.png';
import HangingLegRaiseImage from '../assets/abdomen/HangingLegRaise.png';
import RussianTwistImage from '../assets/abdomen/RussianTwist.png';
import SquatImage from '../assets/quadriceps/Squat.png';
import LegPressImage from '../assets/quadriceps/LegPress.png';
import LegExtensionImage from '../assets/quadriceps/LegExtension.png';
import RomanianDeadliftsImage from '../assets/hamstring/RomanianDeadlifts.png';
import LyingLegCurlImage from '../assets/hamstring/LyingLegCurl.png';
import NordicCurlImage from '../assets/hamstring/NordicCurl.png';
import StandingCalfRaiseImage from '../assets/calves/StandingCalfRaise.jpeg'; 
import SeatedCalfRaiseImage from '../assets/calves/SeatedCalfRaise.jpeg';  
import SingleLegCalfRaiseImage from '../assets/calves/SingleLegCalfRaise.jpeg';
import HipThrustsImage from '../assets/glutes/HipThrusts.png';
import BulgarianSplitSquatsImage from '../assets/glutes/BulgarianSplitSquats.png';
import CableKickBackImages from '../assets/glutes/CableKickback.png';
import WristCurlImage from '../assets/forearms/WristCurl.jpeg';
import ReverseCurlImage from '../assets/forearms/ReverseCurl.jpeg';
import FarmerCarryImage from '../assets/forearms/FarmerCarry.jpeg';
import PullUpImage from '../assets/lats/PullUp.png';
import LatPulldownImage from '../assets/lats/LatPulldown.png';
import LatPullOver from '../assets/lats/latPullover.png';


export const exerciseMap = {
    Biceps: [
        {
            name: 'Barbell Curls',
            description: 'A classic biceps isolation exercise focusing on elbow flexion.',
            instructions: '1. Stand upright holding a barbell with palms facing forward (supinated grip).\n2. Keep elbows close to your torso, and fixed.\n3. Curl the bar upward toward your shoulders.\n4. Focus on elbow flexion and no sway while going up',
            TargetMuscles: 'Biceps brachii (longhead and shorthead), brachialis',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Dumbbell curls, EZ-bar curls, resistance band curls',
            LimitingFactors: 'Grip strength, elbow tendon discomfort, poor shoulder stability, poor balance',
            image: BarbellCurlsImage
        },
        {
            name: 'Hammer Curls',
            description: 'Targets the brachialis and brachioradialis for overall arm development.',
            instructions: '1. Hold dumbbells by your sides, with ends parallel to your body\n2. Curl weights upward without rotating wrists.\n3. Focus on keeping wrists strong and again no sway in your movement.',
            TargetMuscles: 'Brachialis, forearms',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Cross-body hammer curls, rope cable curls',
            LimitingFactors: 'Grip fatigue, wrist stability, leveraging momentum (swinging)',
            image: HammerCurlsImage
        },
        {
            name: 'Preacher Curls',
            description: 'Isolates the biceps with strict form and reduced momentum.',
            instructions: '1. Sit at a preacher bench and place upper arms (triceps) flat against the pad.\n2. Grip the barbell or dumbbells with palms facing upward.\n3. Curl the weight upward until the elbows are flexed, then slowly lower under control.\n4. Make sure you fully extend and are using a weight comfortable for you. Not training the lower half of this movement is what causes injuries!',
            TargetMuscles: 'Biceps brachii isolated',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Preacher curl setup using an inclined bench',
            LimitingFactors: 'Elbow strain, limited range of motion',
            image: PreacherCurlsImage
        }
    ],
    Triceps: [
        {
            name: 'JM Press',
            description: 'Hybrid pressing movement that combines elements of a close-grip bench press and skullcrusher, emphasizing elbow extension with reduced shoulder involvement.',
            instructions: '1. Lie on a flat bench and grip the bar slightly narrower than shoulder width.\n2. Lower the bar toward the upper chest/neck by bending the elbows while keeping upper arms (triceps) relatively vertical.\n3. Press the bar upward by extending the elbows.',
            TargetMuscles: 'Triceps brachii (medial and lateral heads)',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Close-grip bench press, skullcrushers',
            LimitingFactors: 'Elbow joint stress, wrist comfort',
            image: JMPressImage
        },
        {
            name: 'Triceps Pushdown',
            description: 'Isolation exercise using cables for constant tension.',
            instructions: '1. Grip cable handle with elbows tucked.\n2. Extend arms downward, keeping elbows fixed.\n3. Return slowly.',
            TargetMuscles: 'Triceps brachii (longhead)',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Tricep kickbacks, single arm pushdowns, reverse pushdowns',
            LimitingFactors: 'Elbow tendons, grip fatigue',
            image: TricepPushdownImage
        },
        {
            name: 'Overhead Triceps Extension',
            description: 'Targets the medial and lateral head of the triceps.',
            instructions: '1. Hold barbell overhead with both hands.\n2. Lower weight behind head keeping elbows relatively fixed, they are allowed to move slightly.\n3. Extend arms upward.',
            TargetMuscles: 'Triceps brachii (medial and lateral head)',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Dips, cable overhead extensions',
            LimitingFactors: 'Shoulder mobility, neck positioning, setup is difficult with heavy weight',
            image: OverheadTricepsExtensionImage
        }
    ],
    Shoulders: [
        {
            name: 'Machine Shoulder Press',
            description: 'Guided compound shoulder press that provides stability and consistent resistance through the pressing range of motion.',
            instructions: '1. Sit in the machine with the seat adjusted so handles are at shoulder height.\n2. Press upward until arms are extended without locking elbows.\n3. Lower the handles under control back to the starting position.\n4. The deeper you go, the more side delt you target where the top half of the movement used mostly front delt.',
            TargetMuscles: 'Deltoids, triceps',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Barbell overhead press, dumbbell shoulder press',
            LimitingFactors: 'Machine fit, shoulder mobility, tricep fatigue',
            image: MachineShoulderPressImage
        },
        {
            name: 'Lateral Raises',
            description: 'Isolates the lateral deltoid.',
            instructions: '1. Hold dumbbells at sides.\n2. Raise arms to shoulder height.\n3. Lower slowly.',
            TargetMuscles: 'Lateral deltoids',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Cable lateral raises, machine raises',
            LimitingFactors: 'Shoulder impingement, momentum usage',
            image: LateralRaisesImage
        },
        {
            name: 'Rear Delt Fly',
            description: 'Targets posterior shoulders and upper back.',
            instructions: '1. Bend forward with dumbbells.\n2. Raise arms outward.\n3. Squeeze shoulder blades.',
            TargetMuscles: 'Rear delts, rhomboids',
            PlaneOfMovement: 'Transverse',
            Alternatives: 'Face pulls, reverse pec deck',
            LimitingFactors: 'Upper back strength, posture',
            image: RearDeltFlyImage
        }
    ],
    Chest: [
        {
            name: 'Bench Press',
            description: 'Primary chest compound lift.',
            instructions: '1. Lie flat on bench.\n2. Lower bar to mid-chest.\n3. Press upward.',
            TargetMuscles: 'Pectorals, triceps, shoulders',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Dumbbell bench, push-ups',
            LimitingFactors: 'Shoulder stress, wrist alignment',
            image: BenchPressImage 
        },
        {
            name: 'Incline Dumbbell Press',
            description: 'Emphasizes upper chest.',
            instructions: '1. Set bench at incline of about 45-60 degree.\n2. Press dumbbells upward.\n3. Lower under control.',
            TargetMuscles: 'Upper pectorals, shoulders',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Incline barbell press',
            LimitingFactors: 'Shoulder stability',
            image: InclineDumbbellPressImage 
        },
        {
            name: 'Chest Fly',
            description: 'Isolation movement for chest stretch and contraction.',
            instructions: '1. Lower arms wide with slight bend.\n2. Bring hands together above chest with slightly bent arms.',
            TargetMuscles: 'Pectoralis major',
            PlaneOfMovement: 'Transverse',
            Alternatives: 'Cable fly, pec deck',
            LimitingFactors: 'Shoulder strain, overextension',
            image: ChestFlyImage
        }
    ],
    Abdomen: [
        {
            name: 'Plank',
            description: 'Anti-extension core exercise.',
            instructions: '1. Hold body straight on elbows.\n2. Brace core.',
            TargetMuscles: 'Rectus abdominis, transverse abdominis',
            PlaneOfMovement: 'Isometric',
            Alternatives: 'Dead bug, hollow hold',
            LimitingFactors: 'Core endurance, lower back pain',
            image: PlankImage
        },
        {
            name: 'Hanging Leg Raise',
            description: 'Dynamic core flexion exercise.',
            instructions: '1. Hang from bar.\n2. Raise legs upward.',
            TargetMuscles: 'Lower abs, hip flexors',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Captain’s chair raises',
            LimitingFactors: 'Grip strength, hip flexor dominance',
            image: HangingLegRaiseImage
        },
        {
            name: 'Russian Twist',
            description: 'Rotational core movement.',
            instructions: '1. Sit with feet elevated.\n2. Rotate torso side to side.',
            TargetMuscles: 'Obliques',
            PlaneOfMovement: 'Transverse',
            Alternatives: 'Cable woodchoppers',
            LimitingFactors: 'Lower back mobility',
            image: RussianTwistImage // Placeholder
        }
    ],
    Quandriceps: [
        {
            name: 'Squat',
            description: 'Primary lower-body compound movement.',
            instructions: '1. Sit back and down with braced core, and bar going down on straight path.\n2. Drive through heels to stand.',
            TargetMuscles: 'Quadriceps, glutes',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Goblet squat, leg press',
            LimitingFactors: 'Ankle mobility, knee pain',
            image: SquatImage // Placeholder
        },
        {
            name: 'Leg Press',
            description: 'Machine-based quad emphasis.',
            instructions: '1. Press platform away.\n2. Lower slowly.\n3. Do not over extend knees.',
            TargetMuscles: 'Quadriceps',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Hack squat',
            LimitingFactors: 'Knee stress',
            image: LegPressImage // Placeholder
        },
        {
            name: 'Leg Extension',
            description: 'Isolation quad exercise.',
            instructions: '1. Extend legs at knee.\n2. Control descent.',
            TargetMuscles: 'Quadriceps',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Sissy squats',
            LimitingFactors: 'Knee joint stress',
            image: LegExtensionImage // Placeholder
        }
    ],
    Hamstrings: [
        {
            name: 'Romanian Deadlifts',
            description: 'Hip hinge focusing on hamstrings.',
            instructions: '1. Push hips back with braced core.\n2. Keep bar close to legs.',
            TargetMuscles: 'Hamstrings, glutes',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Good mornings',
            LimitingFactors: 'Hamstring flexibility',
            image: RomanianDeadliftsImage // Placeholder
        },
        {
            name: 'Lying Leg Curl',
            description: 'Knee flexion isolation.',
            instructions: '1. Curl heels toward glutes.\n2. Lower slowly.',
            TargetMuscles: 'Hamstrings',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Stability ball curls',
            LimitingFactors: 'Knee discomfort',
            image: LyingLegCurlImage // Placeholder
        },
        {
            name: 'Nordic Curl',
            description: 'Eccentric hamstring strength.',
            instructions: '1. Lower body forward slowly.\n2. Push back up.',
            TargetMuscles: 'Hamstrings',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Assisted Nordics',
            LimitingFactors: 'Strength level',
            image: NordicCurlImage // Placeholder
        }
    ],
    Calves: [
        {
            name: 'Standing Calf Raise',
            description: 'Raises the heels against resistance to build the gastrocnemius through ankle plantarflexion.',
            instructions: '1. Stand with feet shoulder-width apart.\n2. Raise heels off ground, keeping weight on toes.',
            TargetMuscles: 'Gastrocnemius',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Smith machine raises',
            LimitingFactors: 'Ankle mobility',
            image: StandingCalfRaiseImage // Placeholder
        },
        {
            name: 'Seated Calf Raise',
            description: 'Trains the soleus by performing calf raises with bent knees under load.',
            instructions: '1. Sit on a calf raise machine with feet on platform.\n2. Raise heels off ground, keeping weight on toes.',
            TargetMuscles: 'Soleus',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Dumbbell calf raises',
            LimitingFactors: 'Load tolerance',
            image: SeatedCalfRaiseImage // Placeholder
        },
        {
            name: 'Single-Leg Calf Raise',
            description: 'Improves calf strength and ankle stability by loading one leg at a time.',
            instructions: '1. Stand on one leg, keeping the other leg elevated.\n2. Lower the elevated leg back down.',
            TargetMuscles: 'Calves, ankle stabilizers',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Assisted versions',
            LimitingFactors: 'Balance',
            image: SingleLegCalfRaiseImage // Placeholder
        }
    ],
    Glutes: [
        {
            name: 'Hip Thrusts',
            description: 'Extends the hips against resistance to maximally activate the gluteus maximus.',
            instructions: '1. Lie on your back with feet flat on the ground.\n2. Push hips upward, keeping knees and feet in line.\n3. Lower back down under control.',
            TargetMuscles: 'Gluteus maximus',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Glute bridge',
            LimitingFactors: 'Hip mobility',
            image: HipThrustsImage // Placeholder
        },
        {
            name: 'Bulgarian Split Squat',
            description: 'Develops unilateral glute and quad strength with a rear-foot-elevated stance.',
            instructions: '1. Stand with feet shoulder-width apart.\n2. Push hips back.\n3. Lower slowly.',
            TargetMuscles: 'Glutes, quads',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Reverse lunges',
            LimitingFactors: 'Balance',
            image: BulgarianSplitSquatsImage // Placeholder
        },
        {
            name: 'Cable Kickback',
            description: 'Isolates the glutes through controlled hip extension using constant cable tension.',
            instructions: '1. Stand with feet shoulder-width apart with cable around ankle.\n2. Push leg back until almost parallel to ground.\n3. Lower slowly.',
            TargetMuscles: 'Glutes, quads',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Reverse lunges',
            LimitingFactors: 'Balance',
            image: CableKickBackImages // Placeholder
        }
    ],
    Forearms: [
        {
            name: 'Wrist Curls',
            description: 'Strengthens forearm flexors through repeated wrist flexion under load.',
            instructions: '1. Hold a barbell or dumbbell with palms facing down.\n2. Flex wrists upward, keeping elbows stationary.\n3. Return slowly.',
            TargetMuscles: 'Forearm flexors',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Bar hangs',
            LimitingFactors: 'Wrist strain',
            image: WristCurlImage // Placeholder
        },
        {
            name: 'Reverse Curl',
            description: 'Targets the brachioradialis by curling weight with a pronated grip.',
            instructions: '1. Hold a barbell or dumbbell with palms facing down (pronated grip).\n2. Flex wrists upward, keeping elbows stationary.\n3. Return slowly.',
            TargetMuscles: 'Forearm flexors',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Bar hangs',
            LimitingFactors: 'Wrist strain',
            image: ReverseCurlImage // Placeholder
        },
        {
            name: 'Farmer’s Carry',
            description: 'Builds grip and forearm endurance by carrying heavy loads over distance.',
            instructions: '1. Hold a barbell or dumbbell with palms facing down and weight by your side.\n2. Walk forward while maintaining a strong grip.\n3. Keep core engaged and shoulders back.',
            TargetMuscles: 'Forearm flexors',
            PlaneOfMovement: 'Sagittal',
            Alternatives: 'Bar hangs',
            LimitingFactors: 'Wrist strain',
            image: FarmerCarryImage // Placeholder
        }
    ],
    Lats: [
        {
            name: 'Pull-Up',
            description: 'Strengthens the lats by pulling the body vertically against gravity.',
            instructions: '1. Hang from a pull-up bar with hands slightly wider than shoulder width.\n2. Pull your body up until your chin is over the bar.\n3. Lower slowly.',
            TargetMuscles: 'Lats',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Lat pulldown',
            LimitingFactors: 'Bodyweight strength',
            image: PullUpImage // Placeholder
        },
        {
            name: 'Lat Pulldown',
            description: 'Mimics a pull-up to train the lats using adjustable resistance.',
            instructions: '1. Sit at a lat pulldown machine and grip the bar wider than shoulder width.\n2. Pull the bar down to your upper chest, squeezing the lats.\n3. Slowly return to the starting position.',
            TargetMuscles: 'Lats',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Lat pulldown',
            LimitingFactors: 'Bodyweight strength',
            image: LatPulldownImage // Placeholder
        },
        {
            name: 'Straight-Arm Pulldown',
            description: 'Isolates the lats by extending the shoulders with straight arms.',
            instructions: '1. Stand at a cable machine with a straight bar attachment.\n2. With arms straight, pull the bar down to your thighs by extending the shoulders.\n3. Slowly return to the starting position.',
            TargetMuscles: 'Lats',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Lat pulldown',
            LimitingFactors: 'Bodyweight strength',
            image:  LatPullOver // Placeholder
        }
    ],
    Traps: [
        {
            name: 'Shrugs',
            description: 'Elevates the shoulders under load to strengthen the upper trapezius.',
            instructions: '1. Stand upright holding dumbbells or a barbell at your sides.\n2. Elevate your shoulders as high as possible.\n3. Hold briefly, then lower back down.',
            TargetMuscles: 'Lats',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Lat pulldown',
            LimitingFactors: 'Bodyweight strength',
            image: shrugsImage
        },
        {
            name: 'Upright Row',
            description: 'Pulls weight vertically to engage the upper traps and shoulders.',
            instructions: '1. Stand upright holding a barbell or dumbbells in front of you with an overhand grip.\n2. Pull the weight straight up toward your chin, keeping it close to your body.\n3. Lower slowly.',
            TargetMuscles: 'Lats',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Lat pulldown',
            LimitingFactors: 'Bodyweight strength',
            image: uprightRowImage
        },
        {
            name: 'Face Pull',
            description: 'Retracts and externally rotates the shoulders to target mid traps and rear delts.',
            instructions: '1. Attach Rope: Secure a rope to a cable pulley set at or slightly above head height.\n2. Grip: Hold the rope with a neutral grip (palms facing each other), thumbs up.\n3. Step Back: Take a few steps back to create tension, keeping arms extended.\n4. Stance: Stand with feet shoulder-width apart or staggered, core engaged, and a slight lean back for balance.\n5. Pull: Pull the rope towards your face (forehead/eyes), keeping your elbows high and flared out to the sides.\n6. Split: As you pull, try to split the rope apart, as if pulling the ends to your ears.\n7. Squeeze: At the peak, squeeze your shoulder blades together and pause for a second, feeling your rear delts.\n8. Return: Slowly extend your arms back to the starting position with control, avoiding momentum.',
            TargetMuscles: 'Lats',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Lat pulldown',
            LimitingFactors: 'Bodyweight strength',
            image: facePullImage
        }
    ],
    'Upper Back': [
        {
            name: 'Bent-Over Row',
            description: 'Builds dense upper-back musculature using a fixed-bar rowing motion.',
            instructions: '1.',
            TargetMuscles: 'Lats',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Lat pulldown',
            LimitingFactors: 'Bodyweight strength',
            image: bentOverRowImage
        },
        {
            name: 'Face Pull',
            description: 'Retracts and externally rotates the shoulders to target mid traps and rear delts.',
            instructions: '1. Attach Rope: Secure a rope to a cable pulley set at or slightly above head height.\n2. Grip: Hold the rope with a neutral grip (palms facing each other), thumbs up.\n3. Step Back: Take a few steps back to create tension, keeping arms extended.\n4. Stance: Stand with feet shoulder-width apart or staggered, core engaged, and a slight lean back for balance.\n5. Pull: Pull the rope towards your face (forehead/eyes), keeping your elbows high and flared out to the sides.\n6. Split: As you pull, try to split the rope apart, as if pulling the ends to your ears.\n7. Squeeze: At the peak, squeeze your shoulder blades together and pause for a second, feeling your rear delts.\n8. Return: Slowly extend your arms back to the starting position with control, avoiding momentum.',
            TargetMuscles: 'Lats',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Lat pulldown',
            LimitingFactors: 'Bodyweight strength',
            image: facePullImage
        },
        {
            name: 'Pull-Up',
            description: 'Strengthens the lats by pulling the body vertically against gravity.',
            instructions: '1. Hang from a pull-up bar with hands slightly wider than shoulder width.\n2. Pull your body up until your chin is over the bar.\n3. Lower slowly.',
            TargetMuscles: 'Lats',
            PlaneOfMovement: 'Frontal',
            Alternatives: 'Lat pulldown',
            LimitingFactors: 'Bodyweight strength',
            image: pullUpImage // Placeholder
        }
    ]
};

export const getExercisesForMuscle = (muscleName) => {
    return exerciseMap[muscleName] || [];
};

export const getAllMuscleGroups = () => {
    return Object.keys(exerciseMap);
};

export const getExerciseByName = (exerciseName) => {
    for (const muscle in exerciseMap) {
        const exercise = exerciseMap[muscle].find(ex => ex.name === exerciseName);
        if (exercise) return exercise;
    }
    return null;
};
export function getMuscleGroupByExerciseName(exerciseMap, exerciseName) {
  for (const [muscleGroup, exercises] of Object.entries(exerciseMap)) {
    if (exercises.some(ex => ex.name === exerciseName)) {
      return muscleGroup;
    }
  }
  return null; 
}; 
