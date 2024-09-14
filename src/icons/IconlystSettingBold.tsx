import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingBold = ({
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
      d="M15.912 20.878a2.33 2.33 0 0 1-1.2-.334l-.981-.59c-.42-.252-1.097-.24-1.5 0l-.98.59a2.32 2.32 0 0 1-2.128.136 9.6 9.6 0 0 1-1.726-.994 2.32 2.32 0 0 1-.95-1.914l.02-1.144a1.45 1.45 0 0 0-.21-.74 1.5 1.5 0 0 0-.54-.561l-1-.554a2.34 2.34 0 0 1-1.186-1.815 9.3 9.3 0 0 1-.001-1.913 2.34 2.34 0 0 1 1.188-1.818l1-.555q.315-.177.53-.548.226-.39.22-.752l-.02-1.141a2.31 2.31 0 0 1 .946-1.912 9.4 9.4 0 0 1 1.724-.998 2.31 2.31 0 0 1 2.132.135l.982.59c.204.122.454.184.74.184h.007c.299 0 .547-.062.753-.185l.98-.588a2.31 2.31 0 0 1 2.129-.137c.61.272 1.19.607 1.725.996.608.439.962 1.155.948 1.914l-.018 1.144a1.4 1.4 0 0 0 .202.723l.015.023q.216.375.533.552l.998.554a2.34 2.34 0 0 1 1.187 1.817c.066.637.066 1.28 0 1.912a2.34 2.34 0 0 1-1.187 1.819l-.998.554a1.43 1.43 0 0 0-.531.55l-.015.024a1.4 1.4 0 0 0-.204.725l.018 1.144a2.31 2.31 0 0 1-.944 1.91 9.5 9.5 0 0 1-1.727.999 2.3 2.3 0 0 1-.931.198m-3.48-5.421a3.502 3.502 0 0 0 4.006-4.01c-.226-1.472-1.429-2.677-2.903-2.902a3.503 3.503 0 0 0-4.01 4.012c.228 1.473 1.432 2.676 2.906 2.9"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSettingBold;
