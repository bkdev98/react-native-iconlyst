import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdAddBroken = ({
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
      d="M8.946 16.955H3.579M6.262 19.638v-5.367M17.297 4.375c2.43 0 3.953 1.72 3.953 4.155v6.57c0 2.434-1.516 4.155-3.953 4.155h-5.399M3.3 11.815V8.53c0-2.435 1.516-4.155 3.953-4.155h6.204M21.25 9.656H6.209"
    />
  </Svg>
);
export default IconlystBankCarrdAddBroken;
