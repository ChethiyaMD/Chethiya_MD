        name: chatName,
        messageCount,
        lastMessageTimestamp: lastMessage ? lastMessage.timestamp : null,
      };
    })
  );

  return summaries.sort(
    (a, b) => new Date(b.lastMessageTimestamp) - new Date(a.lastMessageTimestamp)
  );
};

const saveMessageV1 = saveMessage;
const saveMessageV2 = (message) => {
  return Promise.all([saveMessageV1(message), saveMessageCount(message)]);
};

module.exports = {
    saveContact,
    loadMessage,
    getName,
    getChatSummary,
    saveGroupMetadata,
    getGroupMetadata,
    saveMessageCount,
    getInactiveGroupMembers,
    getGroupMembersMessageCount,
    saveMessage: saveMessageV2,
};
