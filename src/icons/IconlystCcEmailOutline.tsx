import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCcEmailOutline = ({
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
      d="M11.399 13.317a.75.75 0 0 1-.15 1.05c-1.304.977-3.172.881-4.357-.303a3.32 3.32 0 0 1 .003-4.712 3.32 3.32 0 0 1 4.358-.298.75.75 0 1 1-.908 1.194 1.82 1.82 0 0 0-2.389.164l-.005.005a1.82 1.82 0 0 0 .002 2.586 1.84 1.84 0 0 0 2.396.164.75.75 0 0 1 1.05.15M17.867 10.413a.75.75 0 0 1-1.06 0 1.831 1.831 0 1 0 0 2.588.75.75 0 1 1 1.06 1.061 3.331 3.331 0 1 1 0-4.71.75.75 0 0 1 0 1.061"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 21.5c-5.382 0-9.75-4.368-9.75-9.75S6.618 2 12 2s9.75 4.368 9.75 9.75S17.382 21.5 12 21.5m-8.25-9.75A8.253 8.253 0 0 0 12 20a8.253 8.253 0 0 0 8.25-8.25A8.253 8.253 0 0 0 12 3.5a8.253 8.253 0 0 0-8.25 8.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCcEmailOutline;
