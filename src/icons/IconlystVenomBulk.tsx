import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVenomBulk = ({
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
      d="M12.5 2.5C7.262 2.5 3 6.762 3 12s4.262 9.5 9.5 9.5S22 17.239 22 12s-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.76 14.078a6 6 0 0 1-.524 1.01l.264.265a.499.499 0 0 1-.353.853.5.5 0 0 1-.354-.146l-.165-.166c-.446.5-.963.916-1.537 1.228l.074.157a.5.5 0 1 1-.904.428l-.085-.18a5.4 5.4 0 0 1-3.305.015l-.078.165a.5.5 0 1 1-.904-.428l.062-.13a5.7 5.7 0 0 1-1.553-1.226l-.137.137a.5.5 0 0 1-.707 0 .5.5 0 0 1 0-.707l.232-.232a6 6 0 0 1-.546-1.043.5.5 0 1 1 .929-.369q.146.364.337.692l.017-.016a.5.5 0 0 1 .707.707l-.125.124c.37.419.799.767 1.275 1.027l.095-.202a.501.501 0 0 1 .904.428l-.071.151c.383.108.78.175 1.188.175.428 0 .844-.07 1.243-.187l-.065-.138a.5.5 0 0 1 .904-.429l.084.176c.47-.263.894-.611 1.259-1.029l-.097-.096a.498.498 0 0 1 .689-.72q.18-.315.318-.663a.5.5 0 1 1 .93.369M7.647 8.13c.404-.316 3.044 1.316 3.645 2.026.246.289.22.668-.07 1.014-.354.421-1.093.785-1.851.785-.353 0-.712-.079-1.036-.269-.833-.487-.977-1.765-1.002-2.145-.016-.261-.044-1.136.314-1.411M13.709 10.156c.6-.709 3.242-2.337 3.645-2.027.358.275.332 1.148.315 1.409-.024.381-.168 1.66-1.003 2.148a2.03 2.03 0 0 1-1.036.269c-.758 0-1.496-.364-1.85-.784-.29-.346-.317-.726-.071-1.015"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVenomBulk;
