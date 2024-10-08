import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordUserBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.89 6.217v4.75c0 1.72-.91 2.99-2.34 3.38-.31.09-.66.14-1.02.14H9.47c-.36 0-.71-.05-1.02-.14-1.43-.39-2.34-1.66-2.34-3.38v-4.75c0-2.1 1.35-3.51 3.36-3.51h5.06c2.01 0 3.36 1.41 3.36 3.51"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.55 14.056v.29c-.31.09-.66.14-1.02.14h-.48v-.43c0-.62-.54-1.29-2.05-1.29-1.52 0-2.05.7-2.05 1.3v.42h-.48c-.36 0-.71-.05-1.02-.14v-.28c0-1.35 1.11-2.8 3.55-2.8 2.45 0 3.55 1.41 3.55 2.79M12 9.226c-.57 0-1.04-.46-1.04-1.03s.47-1.04 1.04-1.04 1.04.47 1.04 1.04-.47 1.03-1.04 1.03m0-3.57c-1.4 0-2.54 1.14-2.54 2.54s1.14 2.53 2.54 2.53 2.54-1.13 2.54-2.53-1.14-2.54-2.54-2.54M6.34 21.941a.74.74 0 0 1-.53-.22l-.885-.884-.884.884a.749.749 0 1 1-1.06-1.06l.884-.885-.884-.885a.746.746 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.884.884.885-.884a.749.749 0 1 1 1.06 1.06l-.884.885.884.885a.746.746 0 0 1 0 1.06.74.74 0 0 1-.53.22M20.49 21.941a.74.74 0 0 1-.53-.22l-.886-.884-.885.884a.749.749 0 1 1-1.06-1.06l.884-.885-.884-.885a.74.74 0 0 1-.22-.53.749.749 0 0 1 1.28-.53l.885.884.885-.884a.749.749 0 1 1 1.06 1.06l-.884.885.884.885c.147.146.22.338.22.53a.74.74 0 0 1-.22.53.74.74 0 0 1-.53.22M13.415 21.941a.74.74 0 0 1-.53-.22L12 20.837l-.885.884a.749.749 0 1 1-1.06-1.06l.884-.885-.884-.885a.74.74 0 0 1-.22-.53.749.749 0 0 1 1.28-.53l.885.884.885-.884a.749.749 0 1 1 1.06 1.06l-.884.885.884.885c.147.146.22.338.22.53a.74.74 0 0 1-.22.53.74.74 0 0 1-.53.22"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordUserBulk;
