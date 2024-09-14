import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCombineOutline = ({
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
      d="M8.748 3.498c.75-.803 1.81-1.246 3.048-1.246h6.033c1.24 0 2.302.443 3.05 1.247.743.797 1.122 1.89 1.122 3.099v5.685c0 1.208-.379 2.3-1.122 3.099-.749.803-1.811 1.246-3.05 1.246h-6.033c-1.24 0-2.302-.443-3.05-1.247-.743-.797-1.121-1.89-1.121-3.098V6.598c0-1.21.38-2.302 1.123-3.1m1.098 1.023c-.442.474-.721 1.179-.721 2.077v5.685c0 .898.278 1.603.718 2.076.435.467 1.083.769 1.953.769h6.032c.87 0 1.518-.302 1.954-.769.44-.473.719-1.178.719-2.076V6.598c0-.899-.278-1.604-.72-2.077-.434-.467-1.083-.769-1.952-.769h-6.033c-.866 0-1.514.301-1.95.769"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.723 9.643C4.28 10.118 4 10.824 4 11.72v5.686c0 .897.278 1.6.72 2.072.435.466 1.085.768 1.959.768h6.028c.873 0 1.52-.301 1.953-.767.44-.471.716-1.174.716-2.073v-1.53a.75.75 0 0 1 1.5 0v1.53c0 1.206-.376 2.298-1.118 3.096-.748.803-1.81 1.244-3.051 1.244H6.679c-1.242 0-2.306-.44-3.056-1.244-.744-.796-1.123-1.888-1.123-3.096V11.72c0-1.21.382-2.303 1.126-3.101.75-.804 1.814-1.249 3.053-1.249h1.69a.75.75 0 0 1 0 1.5H6.68c-.867 0-1.518.302-1.956.772"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCombineOutline;
