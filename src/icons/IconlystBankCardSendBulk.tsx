import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSendBulk = ({
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
      d="M12.694 17.544a2.5 2.5 0 0 1 2.5-2.5h1.559a.33.33 0 0 0 .307-.242 2.501 2.501 0 0 1 4.16-1.073l.418.416a.3.3 0 0 0 .512-.213V8.426c0-2.85-1.831-4.766-4.556-4.766H7.29c-2.724 0-4.555 1.915-4.555 4.766v6.732c0 2.851 1.83 4.766 4.555 4.766h5.839c.397 0 .62-.337.218-.704a2.47 2.47 0 0 1-.653-1.676"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.205 17.833a.75.75 0 0 0 0-.583q-.005-.007-.009-.014a.8.8 0 0 0-.153-.227l-2.056-2.04a.75.75 0 1 0-1.057 1.065l.764.758h-4.5a.75.75 0 0 0 0 1.5H19.7l-.77.768a.751.751 0 0 0 1.058 1.063l2.056-2.05c.05-.05.081-.11.115-.172.014-.024.035-.042.046-.068"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.277 9.992a.75.75 0 0 1 0-1.5h10.33a.75.75 0 0 1 0 1.5z"
    />
  </Svg>
);
export default IconlystBankCardSendBulk;
