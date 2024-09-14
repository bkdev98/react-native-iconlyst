import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseQuestionTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.625 18.555c-.01-.795.714-1.133 1.252-1.44.656-.362 1.1-.938 1.1-1.738a2.13 2.13 0 0 0-2.134-2.135c-1.184 0-2.134.95-2.134 2.135M17.625 20.708v.034"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.928 5.749V17.32s0 2.908 7.344 2.908M19.582 10.19v-4.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.928 11.504s0 2.907 7.344 2.907"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.255 8.695c4.047 0 7.327-1.324 7.327-2.956s-3.28-2.956-7.327-2.956S4.928 4.107 4.928 5.74s3.28 2.956 7.327 2.956Z"
    />
  </Svg>
);
export default IconlystDatabaseQuestionTwoTone;
