import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystControllerErrorLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.024 16.134c.208.27.405.53.73.774.674.504 1.48.738 2.73.27 1.324-.54 1.548-1.963 1.512-3.277.01-.297-.233-7.075-3.032-8.542-.576-.253-2.206-1.144-4.114.054-1.63 1.017-2.241.864-3.7 0-1.99-1.188-3.538-.307-4.114-.054-2.79 1.467-3.042 8.245-3.033 8.543-.036 1.313.19 2.736 1.513 3.276 1.26.468 2.062.234 2.738-.27.342-.252.504-.504.702-.774M11.99 14.717v2.223m0 2.256.008-.048M8.003 8.846v2.87m1.434-1.435h-2.87M16.008 11.726v-.01M16.008 8.856v-.01M14.572 10.29v-.01M17.441 10.29v-.01"
    />
  </Svg>
);
export default IconlystControllerErrorLight;
