import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShuffleHorizontalSquareOutline = ({
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
      d="M4.835 4.92C4.16 5.647 3.75 6.71 3.75 8.027v7.946c0 1.318.409 2.38 1.085 3.106.67.72 1.66 1.17 2.95 1.17h8.433c1.288 0 2.277-.45 2.947-1.17.676-.726 1.085-1.788 1.085-3.106V8.027c0-1.317-.41-2.38-1.088-3.106-.672-.721-1.66-1.17-2.944-1.17H7.783c-1.288 0-2.277.45-2.948 1.17M3.737 3.898C4.721 2.841 6.124 2.25 7.783 2.25h8.435c1.655 0 3.057.592 4.041 1.648.98 1.05 1.491 2.5 1.491 4.129v7.946c0 1.628-.509 3.078-1.487 4.129-.984 1.057-2.386 1.648-4.045 1.648H7.784c-1.66 0-3.062-.591-4.046-1.648-.98-1.05-1.488-2.501-1.488-4.129V8.027c0-1.628.509-3.078 1.487-4.129"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.335 8.824c.88.484 1.556 1.398 2.11 2.92.47 1.294 1.071 1.834 1.635 2.093.613.28 1.297.291 2.108.291a.75.75 0 0 1 0 1.5h-.053c-.754 0-1.745 0-2.68-.428-1.006-.46-1.844-1.36-2.42-2.943-.494-1.357-.995-1.883-1.423-2.118-.457-.252-.976-.267-1.798-.267a.75.75 0 1 1 0-1.5h.07c.735 0 1.626-.001 2.45.452"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.135 8.372h.053a.75.75 0 1 1 0 1.5c-.81 0-1.495.01-2.108.291-.564.259-1.165.798-1.636 2.092-.553 1.523-1.23 2.436-2.11 2.92-.824.454-1.715.454-2.45.453h-.07a.75.75 0 0 1 0-1.5c.822 0 1.34-.015 1.798-.267.428-.236.93-.761 1.422-2.118.577-1.584 1.415-2.482 2.421-2.943.935-.429 1.927-.429 2.68-.428"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M14.85 7.047a.75.75 0 0 1 .544.22l1.324 1.324a.75.75 0 0 1 .209.654.75.75 0 0 1-.208.406l-1.325 1.325a.751.751 0 0 1-1.06-1.061l.468-.468.325-.325-.794-.794a.75.75 0 0 1 .518-1.28M14.85 12.801a.75.75 0 0 1 .544.22l1.324 1.324a.75.75 0 0 1 .209.654.75.75 0 0 1-.208.406l-1.325 1.325a.751.751 0 0 1-1.06-1.061l.468-.468.325-.325-.794-.794a.75.75 0 0 1 .518-1.28"
    />
  </Svg>
);
export default IconlystShuffleHorizontalSquareOutline;