import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdGemBroken = ({
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
      d="m17.254 20.12-3.693-4.103 1.231-2.194h4.923l1.231 2.194L19.1 18.07M10.772 18.801H7.215c-2.444 0-3.965-1.724-3.965-4.166V8.047c0-2.441 1.528-4.166 3.965-4.166h.866M21.25 10.973V8.049c0-2.441-1.521-4.166-3.965-4.166h-5.396M3.25 9.179h18"
    />
  </Svg>
);
export default IconlystBankCarrdGemBroken;
