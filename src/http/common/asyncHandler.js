function asyncHandler(handler) {
  return (req, res, next) => {
    const _ = handler(req, res, next);
    if (_.catch) {
      _.catch(next);
    }
  };
}

module.exports = asyncHandler;
