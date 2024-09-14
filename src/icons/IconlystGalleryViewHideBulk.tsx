import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGalleryViewHideBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="m4.253 7.98-.003.189v1.26h3.62a.3.3 0 0 1 .3.3v4.557a.3.3 0 0 1-.3.3H4.25v1.254q0 .099.003.196h3.613a.3.3 0 0 1 .3.303l-.04 3.595H9.62v-3.603a.3.3 0 0 1 .3-.3h.944c.204 0 .348.2.3.4-.126.522-.215 1.557 0 2.094.335.857 1.103 1.199 1.103 2.16a.75.75 0 0 1-.75.75H8.12c-1.607 0-2.969-.57-3.925-1.594-.951-1.018-1.445-2.424-1.445-4.001V8.169c0-1.578.494-2.985 1.444-4.006.956-1.026 2.318-1.599 3.926-1.599h8.13c1.613 0 2.974.573 3.93 1.6.949 1.02 1.44 2.428 1.44 4.005v2.976a.75.75 0 0 1-.75.75c-.34 0-1.422-.099-1.707-.183a6.3 6.3 0 0 0-1.682-.25q-.44 0-.876.072a.317.317 0 0 1-.374-.305V9.731a.3.3 0 0 1 .3-.3h3.589V8.17q0-.096-.003-.19h-3.588a.3.3 0 0 1-.3-.302l.023-3.613h-1.475V7.68a.3.3 0 0 1-.3.3H9.92a.3.3 0 0 1-.3-.3V4.064H8.126l.04 3.612a.3.3 0 0 1-.3.303z" />
      <Path d="M14.781 11.946a.31.31 0 0 1-.165.27 5.8 5.8 0 0 0-.965.645 8.1 8.1 0 0 0-1.49 1.6.3.3 0 0 1-.25.13h-1.99a.3.3 0 0 1-.3-.3v-4.56a.3.3 0 0 1 .3-.3h4.56a.3.3 0 0 1 .3.3z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.405 13.18a.75.75 0 0 0-1.061 0l-.646.647a4.44 4.44 0 0 0-2.2-.618 4.4 4.4 0 0 0-2.735.999 6.55 6.55 0 0 0-1.896 2.584.75.75 0 0 0-.001.56c.3.748.74 1.434 1.289 2.018l-.541.54a.75.75 0 0 0 1.06 1.062l6.73-6.731a.75.75 0 0 0 0-1.06m-6.17 5.11c-.337-.367-.64-.765-.854-1.216a5.1 5.1 0 0 1 1.335-1.71 2.9 2.9 0 0 1 1.782-.655c.375.005.74.09 1.083.235z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M20.765 16.779a.75.75 0 0 1 1.377.595c-.966 2.234-2.699 3.568-4.635 3.568a.75.75 0 0 1 0-1.5c1.32 0 2.537-.995 3.258-2.663"
    />
  </Svg>
);
export default IconlystGalleryViewHideBulk;