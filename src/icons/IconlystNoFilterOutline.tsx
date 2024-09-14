import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNoFilterOutline = ({
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
      d="M3.63 2.47a.75.75 0 0 1 1.06 0l13.3 13.3a.75.75 0 0 1-1.06 1.061l-1.117-1.117-.451.448-.025.023a.76.76 0 0 0-.248.573v1.97c0 .934-.576 1.774-1.445 2.114l-.003.002-1.853.738-.002.001c-1.5.607-3.12-.508-3.12-2.112v-3.198a.77.77 0 0 0-.212-.536l-4.318-3.835-.037-.035a4.52 4.52 0 0 1-1.304-3.17v-2.03c0-1.09.5-2.057 1.292-2.679L3.63 3.53a.75.75 0 0 1 0-1.06m1.532 2.593c-.523.334-.867.92-.867 1.604v2.03c0 .783.31 1.538.856 2.1l4.318 3.836.033.03c.43.43.665 1.007.665 1.61v3.198c0 .555.557.925 1.057.721l.004-.001 1.867-.745a.77.77 0 0 0 .494-.717v-1.97c0-.637.259-1.241.728-1.673l.436-.432zm4.901-1.06a.75.75 0 0 1 .75-.75H18.3a3.407 3.407 0 0 1 3.405 3.414v1.346c0 1.266-.531 2.473-1.462 3.327l-1.06 1.04a.75.75 0 1 1-1.05-1.07l1.068-1.05.013-.011.008-.008c.625-.57.983-1.379.983-2.228V6.667a1.907 1.907 0 0 0-1.905-1.914h-7.485a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNoFilterOutline;
