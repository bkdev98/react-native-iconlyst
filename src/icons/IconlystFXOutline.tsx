import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFXOutline = ({
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
      d="M5.087 4.922C4.41 5.647 4 6.708 4 8.025v7.948c0 1.317.408 2.379 1.084 3.103.669.72 1.657 1.168 2.944 1.168h8.434c1.288 0 2.278-.449 2.95-1.168.678-.726 1.088-1.787 1.088-3.104V8.026c0-1.317-.41-2.378-1.088-3.103-.672-.72-1.662-1.168-2.95-1.168H8.028c-1.282 0-2.27.448-2.941 1.168M3.99 3.898c.984-1.054 2.385-1.644 4.038-1.644h8.434c1.657 0 3.06.59 4.047 1.644C21.489 4.948 22 6.396 22 8.025v7.948c0 1.628-.511 3.077-1.491 4.127-.986 1.055-2.39 1.644-4.047 1.644H8.028c-1.658 0-3.059-.59-4.042-1.645-.978-1.05-1.486-2.5-1.486-4.126V8.025c0-1.629.511-3.078 1.49-4.127"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.916 9.262a.75.75 0 0 1 .75-.75h2.779a.75.75 0 0 1 0 1.5H8.416v4.723a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.916 12a.75.75 0 0 1 .75-.75h2.512a.75.75 0 0 1 0 1.5H7.666a.75.75 0 0 1-.75-.75M15.483 11.399a.75.75 0 0 1 .143 1.05l-2.08 2.738a.75.75 0 1 1-1.194-.908l2.08-2.737a.75.75 0 0 1 1.05-.143"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.563 8.665a.75.75 0 0 1 .143 1.05l-2.08 2.738a.75.75 0 1 1-1.194-.908l2.08-2.737a.75.75 0 0 1 1.051-.143"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.496 8.665a.75.75 0 0 1 1.05.143l2.08 2.737a.75.75 0 0 1-1.194.908l-2.08-2.737a.75.75 0 0 1 .143-1.051"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.576 11.403a.75.75 0 0 1 1.05.143l2.08 2.737a.75.75 0 1 1-1.194.908l-2.08-2.737a.75.75 0 0 1 .144-1.051"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFXOutline;
