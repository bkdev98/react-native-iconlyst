import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookBold = ({
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
      d="M12.001 21.034a2.8 2.8 0 0 1-1.414-.381c-1.262-.725-3.235-1.624-5.446-1.783C3.66 18.772 2.5 17.55 2.5 16.09V5.75c0-.786.337-1.54.924-2.064a2.82 2.82 0 0 1 2.195-.701c2.282.247 4.234 1.155 5.471 1.874a1.81 1.81 0 0 0 1.82 0c1.236-.72 3.189-1.627 5.473-1.874a2.82 2.82 0 0 1 2.194.7c.587.526.923 1.279.923 2.066v10.34c0 1.46-1.16 2.682-2.642 2.779-2.209.159-4.181 1.058-5.447 1.785a2.8 2.8 0 0 1-1.41.379m-.75-4.633a.75.75 0 0 0 1.5 0v-6.75a.75.75 0 0 0-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookBold;
