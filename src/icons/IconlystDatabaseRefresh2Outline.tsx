import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseRefresh2Outline = ({
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
      d="M13.397 19.158a.75.75 0 0 1 .75-.75h1.98a.75.75 0 0 1 0 1.5h-1.23V21a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.785 18.775.005.007.026.04q.039.057.12.164c.11.141.272.33.479.516.423.382.966.698 1.593.698.91 0 1.707-.493 2.133-1.23a.75.75 0 0 1 1.299.75 3.96 3.96 0 0 1-3.432 1.98c-1.146 0-2.033-.575-2.598-1.084a5.6 5.6 0 0 1-.881-1.022l-.014-.022-.005-.008-.002-.003-.001-.001.64-.392-.64.391a.75.75 0 0 1 1.278-.785M20.225 13.566a.75.75 0 0 1 .75.75v1.98a.75.75 0 0 1-.75.75h-1.979a.75.75 0 0 1 0-1.5h1.23v-1.23a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.01 15.274c-.922 0-1.717.493-2.142 1.237a.75.75 0 1 1-1.302-.744 3.95 3.95 0 0 1 3.443-1.993c1.296 0 2.264.541 2.894 1.065a5 5 0 0 1 .892.967l.05.077.016.024.005.008.002.004.001.002-.63.378.63-.378a.75.75 0 0 1-1.284.775l-.003-.005-.024-.037a3.548 3.548 0 0 0-.614-.662 2.98 2.98 0 0 0-1.935-.718M4.273 5.277a.75.75 0 0 1 .75.75v5.786l.002.01a1 1 0 0 0 .043.147c.053.138.176.368.464.626.58.52 1.902 1.212 4.843 1.365a.75.75 0 0 1-.078 1.498c-3.121-.163-4.831-.908-5.766-1.746-.47-.42-.726-.85-.862-1.201a2.3 2.3 0 0 1-.142-.588l-.003-.052v-.034c0-.001 0-.002.75-.002h-.75V6.027a.75.75 0 0 1 .75-.75M18.95 5.277a.75.75 0 0 1 .75.75v4.841a.75.75 0 1 1-1.5 0v-4.84a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.273 11.086a.75.75 0 0 1 .75.75v5.786l.002.01a1 1 0 0 0 .044.152c.056.142.183.377.483.639.605.53 1.978 1.226 5.026 1.356a.75.75 0 1 1-.064 1.498c-3.224-.137-4.987-.882-5.95-1.726-.486-.425-.75-.86-.89-1.218a2.3 2.3 0 0 1-.147-.598l-.003-.053v-.035l.75-.001h-.75v-5.81a.75.75 0 0 1 .75-.75M5.367 5.348c-.277.264-.344.47-.344.608s.067.343.344.608c.279.266.723.54 1.333.786 1.217.491 2.949.812 4.9.812s3.685-.32 4.901-.812c.61-.246 1.054-.52 1.333-.786.278-.265.344-.47.344-.608s-.066-.344-.344-.608c-.279-.266-.722-.54-1.333-.787-1.216-.49-2.949-.811-4.9-.811s-3.684.32-4.9.811c-.611.246-1.055.52-1.334.787m.772-2.178c1.435-.579 3.367-.92 5.462-.92s4.026.341 5.461.92c.716.289 1.345.652 1.808 1.093.464.442.808 1.014.808 1.693 0 .678-.344 1.25-.808 1.693-.463.441-1.092.804-1.808 1.092-1.435.58-3.366.92-5.461.92s-4.027-.34-5.462-.92c-.716-.288-1.345-.65-1.807-1.092-.465-.443-.809-1.015-.809-1.693s.344-1.25.809-1.693c.462-.441 1.091-.804 1.807-1.093"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseRefresh2Outline;