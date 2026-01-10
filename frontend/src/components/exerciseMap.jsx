import BarbellCurlsImage from '../assets/biceps/BarbellCurls.png';
import HammerCurlsImage from '../assets/biceps/HammerCurls.jpeg';
import PreacherCurlsImage from '../assets/biceps/PreacherCurls.jpeg';

export const exerciseMap = {
    Biceps: [
        {
            name: 'Barbell Curls',
            description: 'A classic biceps isolation exercise focusing on elbow flexion.',
            instructions: '1. Stand upright holding a barbell with palms facing forward (supinated grip).\n2. Keep elbows close to your torso, and fixed.\n3. Curl the bar upward toward your shoulders.\n4. Focus on elbow flexion and no sway while going up',
            image: BarbellCurlsImage
        },
        {
            name: 'Hammer Curls',
            description: 'Targets the brachialis and brachioradialis for overall arm development.',
            instructions: '1. Hold dumbbells by your sides, with ends parallel to your body\n2. Curl weights upward without rotating wrists.\n3. Focus on keeping wrists strong and again no sway in your movement.',
            image: HammerCurlsImage
        },
        {
            name: 'Preacher Curls',
            description: 'Isolates the biceps with strict form and reduced momentum.',
            instructions: '1. Sit at a preacher bench and place upper arms (triceps) flat against the pad.\n2. Grip the barbell or dumbbells with palms facing upward.\n3. Curl the weight upward until the elbows are flexed, then slowly lower under control.\n4. Make sure you fully extend and are using a weight comfortable for you. Not training the lower half of this movement is what causes injuries!',
            image: PreacherCurlsImage
        }
    ],
    Triceps: [
        {
            name: 'JM Press',
            description: 'Hybrid pressing movement that combines elements of a close-grip bench press and skullcrusher, emphasizing elbow extension with reduced shoulder involvement.',
            image: BarbellCurlsImage
        },
        {
            name: 'Triceps Pushdown',
            description: 'Isolation exercise using cables for constant tension.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Overhead Triceps Extension',
            description: 'Targets the medial and lateral head of the triceps.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Shoulders: [
        {
            name: 'Machine Shoulder Press',
            description: 'Guided compound shoulder press that provides stability and consistent resistance through the pressing range of motion.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Lateral Raises',
            description: 'Isolates the lateral deltoid.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Rear Delt Fly',
            description: 'Targets posterior shoulders and upper back.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Chest: [
        {
            name: 'Bench Press',
            description: 'Primary chest compound lift.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Incline Dumbbell Press',
            description: 'Emphasizes upper chest.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Chest Fly',
            description: 'Isolation movement for chest stretch and contraction.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Abdomen: [
        {
            name: 'Plank',
            description: 'Anti-extension core exercise.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Hanging Leg Raise',
            description: 'Dynamic core flexion exercise.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Russian Twist',
            description: 'Rotational core movement.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Quandriceps: [
        {
            name: 'Squat',
            description: 'Primary lower-body compound movement.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Leg Press',
            description: 'Machine-based quad emphasis.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Leg Extension',
            description: 'Isolation quad exercise.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Hamstrings: [
        {
            name: 'Romanian Deadlifts',
            description: 'Hip hinge focusing on hamstrings.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Lying Leg Curl',
            description: 'Knee flexion isolation.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Nordic Curl',
            description: 'Eccentric hamstring strength.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Calves: [
        {
            name: 'Standing Calf Raise',
            description: 'Raises the heels against resistance to build the gastrocnemius through ankle plantarflexion.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Seated Calf Raise',
            description: 'Trains the soleus by performing calf raises with bent knees under load.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Single-Leg Calf Raise',
            description: 'Improves calf strength and ankle stability by loading one leg at a time.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Glutes: [
        {
            name: 'Hip Thrusts',
            description: 'Extends the hips against resistance to maximally activate the gluteus maximus.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Bulgarian Split Squat',
            description: 'Develops unilateral glute and quad strength with a rear-foot-elevated stance.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Cable Kickback',
            description: 'Isolates the glutes through controlled hip extension using constant cable tension.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Forearms: [
        {
            name: 'Wrist Curls',
            description: 'Strengthens forearm flexors through repeated wrist flexion under load.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Reverse Curl',
            description: 'Targets the brachioradialis by curling weight with a pronated grip.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Farmer’s Carry',
            description: 'Builds grip and forearm endurance by carrying heavy loads over distance.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Lats: [
        {
            name: 'Pull-Up',
            description: 'Strengthens the lats by pulling the body vertically against gravity.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Lat Pulldown',
            description: 'Mimics a pull-up to train the lats using adjustable resistance.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Straight-Arm Pulldown',
            description: 'Isolates the lats by extending the shoulders with straight arms.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Traps: [
        {
            name: 'Shrugs',
            description: 'Elevates the shoulders under load to strengthen the upper trapezius.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Upright Row',
            description: 'Pulls weight vertically to engage the upper traps and shoulders.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Face Pull',
            description: 'Retracts and externally rotates the shoulders to target mid traps and rear delts.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    'Upper Back': [
        {
            name: 'Bent-Over Row',
            description: 'Builds dense upper-back musculature using a fixed-bar rowing motion.',
            image: BarbellCurlsImage 
        },
        {
            name: 'Face Pull',
            description: 'Retracts and externally rotates the shoulders to target mid traps and rear delts.',
            image: BarbellCurlsImage 
        },
        {
            name: 'Pull-Up',
            description: 'Strengthens the lats by pulling the body vertically against gravity.',
            image: BarbellCurlsImage // Placeholder
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
