import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondsPokerCardBulk = ({
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
      d="M15 2.5H9A4.505 4.505 0 0 0 4.5 7v10c0 2.481 2.019 4.5 4.5 4.5h6c2.481 0 4.5-2.019 4.5-4.5V7c0-2.482-2.019-4.5-4.5-4.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16 6.76a.75.75 0 0 0 .75-.75V6a.746.746 0 0 0-.75-.744.755.755 0 0 0-.75.755c0 .414.336.75.75.75m-2.635 9.198 2.347-2.84a1.77 1.77 0 0 0-.005-2.262l-2.346-2.818a1.77 1.77 0 0 0-2.722 0l-2.346 2.817a1.77 1.77 0 0 0-.006 2.264l2.347 2.839a1.768 1.768 0 0 0 2.731 0M8 18.76a.75.75 0 0 0 .75-.75V18a.746.746 0 0 0-.75-.745.755.755 0 0 0-.75.755c0 .414.336.75.75.75m3.999-9.862a.27.27 0 0 1 .21.098l2.347 2.818c.083.1.083.245 0 .346l-2.347 2.84a.27.27 0 0 1-.419 0l-2.347-2.839a.27.27 0 0 1 .001-.348l2.347-2.817a.27.27 0 0 1 .208-.098"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamondsPokerCardBulk;
