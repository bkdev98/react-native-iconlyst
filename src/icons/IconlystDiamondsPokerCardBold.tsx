import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiamondsPokerCardBold = ({
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
      d="M16.75 6.01a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zm-1.038 7.107-2.347 2.84a1.768 1.768 0 0 1-2.731 0l-2.347-2.839a1.77 1.77 0 0 1 .006-2.264l2.346-2.816a1.77 1.77 0 0 1 2.722-.001l2.346 2.818a1.77 1.77 0 0 1 .005 2.262M8.75 18.01a.75.75 0 0 1-1.5 0c0-.414.336-.755.75-.755s.75.331.75.745zM15 2.5H9A4.505 4.505 0 0 0 4.5 7v10c0 2.481 2.019 4.5 4.5 4.5h6c2.481 0 4.5-2.019 4.5-4.5V7c0-2.482-2.019-4.5-4.5-4.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.209 8.996a.27.27 0 0 0-.418 0l-2.347 2.817a.27.27 0 0 0-.001.348L11.79 15a.27.27 0 0 0 .419.001l2.347-2.84a.27.27 0 0 0 0-.346z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiamondsPokerCardBold;
