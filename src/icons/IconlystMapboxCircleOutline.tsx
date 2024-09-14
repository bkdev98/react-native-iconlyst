import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapboxCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.82 6.123a5.54 5.54 0 0 1 3.035 2.988c.599 1.418.557 3.112-.2 4.49v.001c-.742 1.344-2.037 2.212-3.29 2.754l-.01.004c-2.168.896-4.553.99-6.766.692a.75.75 0 0 1-.643-.644c-.302-2.252-.204-4.69.748-6.89l.005-.01c.528-1.166 1.342-2.361 2.573-3.089 1.38-.814 3.105-.88 4.547-.296m-3.785 1.588c-.863.51-1.507 1.397-1.967 2.41-.732 1.693-.889 3.611-.702 5.512 1.86.183 3.738.033 5.41-.656 1.091-.473 2.048-1.162 2.565-2.098.523-.954.563-2.166.131-3.186l-.002-.005a4.04 4.04 0 0 0-2.208-2.172l-.004-.002c-1.045-.423-2.277-.362-3.223.197"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.048 8.059a.75.75 0 0 1 .673.442c.13.29.261.557.399.836l.178.363.339.166c.287.142.56.277.856.408a.75.75 0 0 1 .029 1.359q-.61.3-1.221.595l-.097.195c-.168.34-.328.663-.476 1a.75.75 0 0 1-1.35.047c-.132-.25-.253-.504-.368-.742l-.002-.006q-.121-.254-.24-.492a24 24 0 0 0-.487-.237l-.004-.002c-.24-.114-.497-.237-.751-.373a.75.75 0 0 1 .05-1.347c.351-.155.69-.323 1.045-.499l.15-.074.335-.69.256-.526a.75.75 0 0 1 .686-.423m-.014 2.474-.023.048a.75.75 0 0 1-.347.35l-.073.035.09.048c.132.07.24.18.31.312l.042.081.034-.07a.75.75 0 0 1 .349-.348l.05-.025-.052-.024a.75.75 0 0 1-.38-.407"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMapboxCircleOutline;
