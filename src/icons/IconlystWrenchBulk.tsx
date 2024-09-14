import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWrenchBulk = ({
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
      d="M4.522 20.7a3.08 3.08 0 0 0 2.08.783 3.41 3.41 0 0 0 2.404-.996l3.736-3.735a7.32 7.32 0 0 0 7.592-1.737 7.28 7.28 0 0 0 1.605-7.921.5.5 0 0 0-.816-.165l-3.399 3.4a.8.8 0 0 1-.722.219l-1.605-.317a.8.8 0 0 1-.629-.628l-.32-1.611a.8.8 0 0 1 .22-.722l3.397-3.4a.5.5 0 0 0-.166-.815A7.3 7.3 0 0 0 9.98 4.66a7.32 7.32 0 0 0-1.73 7.599L4.407 16.1a3.2 3.2 0 0 0-.929 2.326A3.15 3.15 0 0 0 4.522 20.7"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWrenchBulk;
