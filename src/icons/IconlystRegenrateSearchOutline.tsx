import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRegenrateSearchOutline = ({
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
      d="M11.782 4.042a.75.75 0 0 1-.69.806 7.164 7.164 0 1 0 7.697 7.794.75.75 0 1 1 1.494.134 8.665 8.665 0 1 1-9.306-9.423.75.75 0 0 1 .805.69"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.508 17.257a.75.75 0 0 1 1.06 0l3.221 3.212a.75.75 0 1 1-1.06 1.062l-3.22-3.213a.75.75 0 0 1 0-1.06M16.747 10.436a.75.75 0 0 0 .704-.49l.108-.294a3.3 3.3 0 0 1 1.945-1.947l.293-.109a.75.75 0 0 0 0-1.406l-.293-.109a3.3 3.3 0 0 1-1.945-1.947l-.108-.294a.75.75 0 0 0-1.407 0l-.109.294a3.3 3.3 0 0 1-1.944 1.947l-.293.109a.75.75 0 0 0 0 1.407l.293.108c.9.334 1.61 1.045 1.944 1.947l.109.294a.75.75 0 0 0 .703.49m-1.114-3.543c.43-.307.807-.684 1.114-1.115.308.43.684.808 1.114 1.115-.43.308-.806.685-1.114 1.115a4.8 4.8 0 0 0-1.114-1.115M11.29 13.638a.75.75 0 0 0 .718-.532c.134-.44.477-.782.914-.916a.75.75 0 0 0 0-1.434 1.38 1.38 0 0 1-.914-.916.75.75 0 0 0-1.435 0c-.133.439-.476.782-.914.915a.75.75 0 0 0 0 1.435c.438.134.78.477.914.916a.75.75 0 0 0 .718.532"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRegenrateSearchOutline;
