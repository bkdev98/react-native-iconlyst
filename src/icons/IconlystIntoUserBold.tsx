import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntoUserBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.267 14.636a1 1 0 0 1-.704-.291l-1.924-1.91-.007-.007h-.001q-.001 0-.002-.002l-.001-.001a1 1 0 0 1-.165-.224q-.003-.002-.002-.003l-.001-.002q-.003-.002-.002-.003l-.001-.002-.001-.003c-.002-.001 0-.002-.002-.002v-.003l-.001-.003-.002-.002-.032-.07h-.001a1 1 0 0 1 0-.766l.003-.004v-.003q.001 0 .002-.003.002 0 0-.002c.003-.001 0-.002.003-.003v-.003l.002-.002v-.003c.003-.001 0-.002.003-.003v-.003l.002-.002v-.003l.003-.003v-.002q.071-.15.19-.276l.003-.001.01-.011 1.923-1.91a1 1 0 1 1 1.41 1.42l-.203.2h2.336a1 1 0 1 1 0 2H18.77l.2.202a.999.999 0 0 1-.703 1.709M9.291 12.516c2.608 0 4.73-2.12 4.73-4.725a4.733 4.733 0 0 0-4.73-4.725 4.733 4.733 0 0 0-4.73 4.725 4.733 4.733 0 0 0 4.73 4.725M9.291 14.496c-3.045 0-7.095.333-7.095 3.21 0 3.227 5.34 3.227 7.095 3.227 3.045 0 7.094-.333 7.094-3.209 0-3.228-5.339-3.228-7.094-3.228"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIntoUserBold;
