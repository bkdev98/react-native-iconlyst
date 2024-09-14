import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorWebcamVideoBulk = ({
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
      d="M16.34 11.851c1.2 0 2.25-.44 3.02-1.19a3.001 3.001 0 0 0 1.99-.06v2.25c0 2.5-2.03 4.53-4.53 4.53H6.88c-2.5 0-4.53-2.03-4.53-4.53v-5.45c0-2.5 2.03-4.53 4.53-4.53h2.67c-.37.66-.57 1.43-.57 2.27v2.23c0 2.55 1.88 4.48 4.38 4.48z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.797 2.512c-.79.174-1.372.615-1.702 1.291-.289.589-.308.712-.331 2.134-.032 1.893.054 2.428.488 3.064.348.509.8.821 1.42.98.305.078.48.085 2.19.085 1.697 0 1.887-.008 2.184-.084.179-.045.42-.13.537-.19a2.46 2.46 0 0 0 1.141-1.264c.054-.142.113-.263.133-.268s.185.11.366.258c.46.375.722.49 1.111.488.394-.003.705-.146.978-.45.316-.352.322-.393.335-2.277.01-1.716.002-1.824-.172-2.109a1.3 1.3 0 0 0-1.067-.636c-.436-.028-.65.055-1.132.443-.375.3-.476.348-.476.223 0-.106-.266-.609-.434-.82-.34-.43-.862-.744-1.44-.866-.408-.087-3.736-.088-4.13-.002m7.466 3.745c0 .675-.015 1.227-.034 1.227s-.309-.225-.645-.5l-.612-.5v-.442l.614-.503c.337-.277.627-.505.645-.506.017-.001.032.55.032 1.224"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M8.893 17.383 8.46 20.05H6.906a.75.75 0 0 0 0 1.5h9.888a.75.75 0 0 0 0-1.5h-1.552l-.435-2.668h-1.519l.434 2.668H9.98l.433-2.668z"
    />
  </Svg>
);
export default IconlystMonitorWebcamVideoBulk;
