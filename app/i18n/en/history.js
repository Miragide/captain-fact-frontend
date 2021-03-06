import {
  ENTITY_VIDEO,
  ENTITY_SPEAKER,
  ENTITY_STATEMENT,
  ENTITY_SOURCED_COMMENT,
  ENTITY_COMMENT,
  ENTITY_USER_ACTION,
  ENTITY_USER,
  ACTION_CREATE,
  ACTION_REMOVE,
  ACTION_UPDATE,
  ACTION_DELETE,
  ACTION_ADD,
  ACTION_RESTORE,
  ACTION_REVERT_SELF_VOTE,
  ACTION_REVERT_VOTE_DOWN,
  ACTION_REVERT_VOTE_UP,
  ACTION_SELF_VOTE,
  ACTION_VOTE_DOWN,
  ACTION_VOTE_UP,
  ACTION_FLAG
} from '../../constants'

export default {
  compare_show: 'Compare',
  compare_hide: 'Hide',
  compareAll: 'Compare all',
  hideAll: 'Hide all',
  when: 'When',
  who: 'Who',
  changes: 'Changes',
  revert: 'Revert',
  entity: 'Entity',
  moderation: 'Moderation',
  deletedUser: 'Deleted user',
  madeAction: '{{action}}',
  action: {
    [ACTION_CREATE]: 'Created',
    [ACTION_REMOVE]: 'Removed',
    [ACTION_UPDATE]: 'Updated',
    [ACTION_DELETE]: 'Deleted',
    [ACTION_ADD]: 'Added',
    [ACTION_RESTORE]: 'Restored',
    [ACTION_FLAG]: 'Flagged',
    [ACTION_VOTE_UP]: 'Voted up',
    [ACTION_VOTE_DOWN]: 'Voted down',
    [ACTION_SELF_VOTE]: 'Self voted',
    [ACTION_REVERT_VOTE_UP]: 'Reverted upvote',
    [ACTION_REVERT_VOTE_DOWN]: 'Reverted downvote',
    [ACTION_REVERT_SELF_VOTE]: 'Reverted self vote'
  },
  entities: {
    [ENTITY_VIDEO]: 'video',
    [ENTITY_SPEAKER]: 'speaker',
    [ENTITY_STATEMENT]: 'statement',
    [ENTITY_COMMENT]: 'comment',
    [ENTITY_SOURCED_COMMENT]: 'sourced comment',
    [ENTITY_USER_ACTION]: 'action',
    [ENTITY_USER]: 'user'
  }
}
