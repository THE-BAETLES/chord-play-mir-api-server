import { ChordInfo } from 'src/models/chordinfo.model';

export type Sheet = {
  bpm: number;
  beatInfos: number[];
  chordInfos: ChordInfo[];
};
