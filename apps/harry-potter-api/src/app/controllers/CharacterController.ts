import { ErrorCode, ErrorMessage } from '@tekkon/api-services';
import { HttpError } from '../utils/errorHandler';
import { CharacterServices } from '../services';
export const listCharacter = async (req, res, next) => {
  try {
    const characters = await CharacterServices.listCharacters();
    if (!characters.length)
      throw new HttpError(404, ErrorCode.PC01, ErrorMessage[ErrorCode.PC01]);
    return res
      .status(200)
      .send({ status: 200, message: 'Characters Fetched', characters });
  } catch (err) {
    return next(err);
  }
};

export const findCharacterById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const character = await CharacterServices.listCharacterById(id);
    if (!character) throw new HttpError(404, ErrorCode.PC02);
    return res
      .status(200)
      .send({ status: 200, message: 'Character Fetched', character });
  } catch (err) {
    return next(err);
  }
};
