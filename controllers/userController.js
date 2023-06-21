// Create the user controller     
const User = require('../models/user');

const userController = {
    getAllUsers(req, res) {
        User.find({})  
        .then(dbUserData => res.json(dbUserData))
            .catch((err )=> res.status(400).json(err));        
    },

    getUserById(req, res) {
        User.find ({_id: req.params.id})
        .then(dbUserData => res.json(dbUserData))
        .catch((err )=> res.status(400).json(err));
    },
        
    createUser(req, res) {
        User.create(req.body)
        .then(dbUserData => res.json(dbUserData))
        .catch((err )=> {
            console.error(err)
            res.status(400).json(err)
        });
    },

    updateUser(req, res) {
        User.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(dbUserData => res.json(dbUserData))
        .catch((err )=> res.status(400).json(err));
            
    },

    deleteUser(req, res) {
        User.findOneAndDelete({_id: req.params.id})
        .then(dbUserData => res.json(dbUserData))
        .catch((err )=> res.status(400).json(err));
    },
    
    addFriend(req, res) {
        const { userId, friendId } = req.params;
    
        User.findOneAndUpdate(
          { _id: userId },
          { $addToSet: { friends: friendId } },
          { new: true }
        )
          .populate('friends')
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: 'User not found' });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.status(400).json(err));
      },
    
      deleteFriend(req, res) {
        const { userId, friendId } = req.params;
    
        User.findOneAndUpdate(
          { _id: userId },
          { $pull: { friends: friendId } },
          { new: true }
        )
          .populate('friends')
          .then((dbUserData) => {
            if (!dbUserData) {
              res.status(404).json({ message: 'User not found' });
              return;
            }
            res.json(dbUserData);
          })
          .catch((err) => res.status(400).json(err));
      },
};

module.exports = userController;

