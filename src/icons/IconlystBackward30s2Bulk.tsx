import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward30s2Bulk = ({
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
      d="M17.408 3.07h-7.67c-3.05 0-5.099 2.138-5.099 5.32v1.03l-.726-.004c-.312-.013-.548.16-.675.417a.75.75 0 0 0 .076.79l1.472 1.92a.73.73 0 0 0 .603.328l.01-.002.01.002c.041 0 .078-.02.12-.028.055-.01.112-.016.163-.039a.7.7 0 0 0 .188-.127q.025-.018.05-.039c.021-.023.053-.035.073-.06l1.49-1.945a.749.749 0 0 0-.592-1.206l-.762-.003V8.39c0-2.32 1.413-3.82 3.598-3.82h7.67c2.188 0 3.6 1.5 3.6 3.82v7.221c0 2.32-1.414 3.82-3.602 3.82H9.738c-2.185 0-3.598-1.5-3.598-3.82a.75.75 0 0 0-1.5 0c0 3.182 2.05 5.32 5.098 5.32h7.669c3.05 0 5.1-2.138 5.1-5.32v-7.22c0-3.183-2.049-5.32-5.099-5.32"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.567 14.008a.6.6 0 0 1-.598-.6.75.75 0 0 0-1.5 0c0 1.158.942 2.1 2.098 2.1a2.1 2.1 0 0 0 2.099-2.1 2.1 2.1 0 0 0-.493-1.35 2.1 2.1 0 0 0-1.605-3.449 2.1 2.1 0 0 0-2.1 2.1.75.75 0 0 0 1.5 0 .598.598 0 1 1 1.196 0c0 .335-.261.6-.596.6a.75.75 0 0 0 0 1.5c.335 0 .598.262.598.598a.6.6 0 0 1-.6.601M15.672 13.138v-2.16a.821.821 0 0 1 1.643 0v2.16c0 .458-.369.83-.822.83a.826.826 0 0 1-.82-.83m3.143 0v-2.16a2.323 2.323 0 0 0-2.322-2.32 2.323 2.323 0 0 0-2.32 2.32v2.16a2.33 2.33 0 0 0 2.32 2.33 2.33 2.33 0 0 0 2.322-2.33"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward30s2Bulk;
