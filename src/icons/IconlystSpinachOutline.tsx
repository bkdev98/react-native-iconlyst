import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpinachOutline = ({
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
      d="M11.076 3.83c1.4 0 2.598.876 3.072 2.113a.75.75 0 0 0 .871.462q.192-.046.4-.046a1.744 1.744 0 0 1 1.663 2.272.75.75 0 0 0 .56.961 3.29 3.29 0 0 1 2.608 3.218c0 2.022-1.188 3.226-2.81 3.81-1.668.599-3.694.486-5.047-.133a.75.75 0 1 0-.624 1.364c1.724.788 4.157.906 6.179.18 2.069-.743 3.802-2.422 3.802-5.221a4.79 4.79 0 0 0-3.095-4.48q.008-.112.008-.226A3.244 3.244 0 0 0 15.3 4.86a4.79 4.79 0 0 0-8.84.98 3.245 3.245 0 0 0-2.954 3.737A4.77 4.77 0 0 0 2.25 12.81c0 1.255.617 2.85 1.84 3.946 1.27 1.138 3.15 1.697 5.53.9a.75.75 0 0 0-.475-1.423c-1.89.633-3.2.17-4.054-.595-.901-.806-1.341-1.993-1.341-2.828 0-.967.416-1.835 1.081-2.438a.75.75 0 0 0 .213-.778A1.744 1.744 0 0 1 6.963 7.35a.75.75 0 0 0 .85-.648 3.29 3.29 0 0 1 3.263-2.872"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.812 4.055a.75.75 0 0 0-.134 1.052 3.27 3.27 0 0 1 .685 2.01 3.27 3.27 0 0 1-.457 1.675.75.75 0 1 0 1.29.765 4.77 4.77 0 0 0 .668-2.44 4.77 4.77 0 0 0-1-2.928.75.75 0 0 0-1.053-.134M12 7.19a.75.75 0 0 1 .75.75v12.98a.75.75 0 0 1-1.5 0V7.94a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.642 10.61a.75.75 0 0 1 1.049-.16c1.595 1.172 2.108 1.821 2.913 2.913a.75.75 0 0 1-1.208.89c-.74-1.005-1.151-1.535-2.593-2.594a.75.75 0 0 1-.161-1.049M16.517 12.398a.75.75 0 0 0-1.049-.161c-.78.573-1.045.906-1.435 1.435a.75.75 0 1 0 1.207.89c.326-.442.489-.655 1.116-1.116a.75.75 0 0 0 .16-1.048"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSpinachOutline;
