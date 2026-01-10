import BarbellCurlsImage from '../assets/BarbellCurls.png';
import HammerCurlsImage from '../assets/HammerCurls.jpeg';
import PreacherCurlsImage from '../assets/PreacherCurls.jpeg';

export const exerciseMap = {
    Biceps: [
        {
            name: 'Barbell Curls',
            description: 'A classic biceps isolation exercise focusing on elbow flexion.',
            image: BarbellCurlsImage
        },
        {
            name: 'Hammer Curls',
            description: 'Targets the brachialis and brachioradialis for overall arm development.',
            image: HammerCurlsImage
        },
        {
            name: 'Preacher Curls',
            description: 'Isolates the biceps with strict form and reduced momentum.',
            image: PreacherCurlsImage
        }
    ],
    Triceps: [
        {
            name: 'Tricep Dips',
            description: 'Compound exercise for triceps, chest, and shoulders.',
            image: BarbellCurlsImage
        },
        {
            name: 'Skull Crushers',
            description: 'Isolation exercise targeting all three heads of the triceps.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Shoulders: [
        {
            name: 'Overhead Press',
            description: 'Compound movement for overall shoulder development.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Lateral Raises',
            description: 'Isolation exercise targeting the lateral deltoids.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Chest: [
        {
            name: 'Bench Press',
            description: 'Primary compound movement for chest development.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Push-ups',
            description: 'Bodyweight exercise for chest, shoulders, and triceps.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Abdomen: [
        {
            name: 'Crunches',
            description: 'Classic abdominal exercise for core strength.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Planks',
            description: 'Isometric hold for overall core stability.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Quandriceps: [
        {
            name: 'Squats',
            description: 'King of leg exercises for overall lower body development.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Leg Extensions',
            description: 'Isolation exercise for quadriceps development.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Hamstrings: [
        {
            name: 'Romanian Deadlifts',
            description: 'Targets hamstrings and glutes with hip hinge movement.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Leg Curls',
            description: 'Isolation exercise for hamstring development.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Calves: [
        {
            name: 'Calf Raises',
            description: 'Standing or seated raises for calf development.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Glutes: [
        {
            name: 'Hip Thrusts',
            description: 'Primary exercise for glute activation and growth.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Glute Bridges',
            description: 'Bodyweight exercise for glute activation.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Forearms: [
        {
            name: 'Wrist Curls',
            description: 'Isolation exercise for forearm flexors.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Lats: [
        {
            name: 'Pull-ups',
            description: 'Compound exercise for overall back development.',
            image: BarbellCurlsImage // Placeholder
        },
        {
            name: 'Lat Pulldowns',
            description: 'Machine exercise targeting the latissimus dorsi.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    Traps: [
        {
            name: 'Shrugs',
            description: 'Isolation exercise for upper trapezius development.',
            image: BarbellCurlsImage // Placeholder
        }
    ],
    'Upper Back': [
        {
            name: 'Rows',
            description: 'Compound movement for upper back thickness.',
            image: BarbellCurlsImage 
        },
        {
            name: 'Face Pulls',
            description: 'Exercise for rear deltoids and upper back.',
            image: BarbellCurlsImage 
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
