import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinReceiptTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.564 19.902-.76.364a1.203 1.203 0 0 1-1.722-1.086l.01-12.256C5.092 4.501 6.439 3 8.858 3h7.3C18.583 3 19.9 4.501 19.9 6.924l.018 12.253a1.203 1.203 0 0 1-1.724 1.087l-.754-.36a1.78 1.78 0 0 0-1.444-.044l-2.146.875a3.57 3.57 0 0 1-2.7 0l-2.143-.875a1.78 1.78 0 0 0-1.444.042"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.774 11.598h-2.051v2.936h2.114c.858 0 1.545-.737 1.461-1.613-.073-.763-.757-1.323-1.524-1.323M12.774 8.662h-2.051v2.936h2.114c.858 0 1.545-.736 1.461-1.612-.073-.764-.757-1.324-1.524-1.324M12.252 15.4v-.865M12.252 8.659v-.866"
    />
  </Svg>
);
export default IconlystBitcoinReceiptTwoTone;
