import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingLeftOutline = ({
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
      d="M4 10.68a.93.93 0 0 1 .93-.93h9.64a.75.75 0 0 0 .425-1.367L13.251 7.18a1.09 1.09 0 0 1-.398-1.285c.206-.537.767-.79 1.26-.61C15.731 5.871 17.53 6.8 19 7.98c.949.764 1.505 2.456 1.501 4.385-.004 1.918-.562 3.71-1.43 4.578-.719.719-1.857 1.318-3.14 1.619-1.28.3-2.625.285-3.747-.13-.95-.352-1.456-1.156-1.747-2.31-.22-.87-.287-1.807-.355-2.74q-.036-.517-.082-1.026a.75.75 0 0 0-.735-.68l-4.348-.066a.93.93 0 0 1-.916-.93m.93-2.43a2.43 2.43 0 0 0-.037 4.861l3.667.056.015.21c.07.966.152 2.104.407 3.113.346 1.376 1.063 2.75 2.68 3.35 1.46.54 3.116.534 4.61.183 1.492-.35 2.901-1.06 3.859-2.018 1.272-1.273 1.865-3.54 1.869-5.636.004-2.086-.576-4.362-2.061-5.557-1.621-1.303-3.573-2.306-5.315-2.937-1.309-.474-2.691.232-3.171 1.484a2.59 2.59 0 0 0 .732 2.891z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPointingLeftOutline;
