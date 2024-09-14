import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDresser1Bold = ({
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
      d="M9.459 12.975a.75.75 0 0 1-.75-.75v-2.27a.75.75 0 0 1 1.5 0v2.27a.75.75 0 0 1-.75.75m1.789-10.3a.3.3 0 0 0-.3-.3H7.085c-2.232 0-3.792 1.628-3.792 3.96v9.5c0 1.686.782 2.965 2.045 3.57v1.47a.75.75 0 0 0 1.5 0v-1.102c.084.005.161.022.247.022h3.863a.3.3 0 0 0 .3-.3zM15.291 12.225a.75.75 0 0 1-1.5 0v-2.27a.75.75 0 0 1 1.5 0zm1.623-9.85h-3.866a.3.3 0 0 0-.3.3v16.82a.3.3 0 0 0 .3.3h3.865c.086 0 .164-.017.248-.022v1.102a.75.75 0 0 0 1.5 0v-1.47c1.264-.605 2.046-1.884 2.046-3.57v-9.5c0-2.368-1.524-3.96-3.793-3.96"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDresser1Bold;
