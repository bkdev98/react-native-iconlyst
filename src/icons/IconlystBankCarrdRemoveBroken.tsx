import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdRemoveBroken = ({
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
      d="M7.391 15.483 3.25 19.625M7.391 19.625 3.25 15.483M17.297 4.377c2.43 0 3.953 1.72 3.953 4.155v6.57c0 2.434-1.516 4.155-3.953 4.155h-5.399M3.3 11.815V8.53c0-2.435 1.516-4.155 3.953-4.155h6.204M21.25 9.656H6.209"
    />
  </Svg>
);
export default IconlystBankCarrdRemoveBroken;
