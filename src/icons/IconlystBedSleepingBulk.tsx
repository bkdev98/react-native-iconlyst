import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedSleepingBulk = ({
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
      d="M22.013 14.986a3.51 3.51 0 0 0-2.579-2.578c-.405-.093-.85-.093-1.734-.093H7.525c-.885 0-1.329 0-1.742.095a3.5 3.5 0 0 0-2.572 2.576c-.098.409-.098.853-.098 1.738 0 .477 0 .74.06.99a2.08 2.08 0 0 0 1.904 1.59v1.07a.75.75 0 0 0 1.5 0v-.86c0-.11.09-.2.2-.2h11.671c.11 0 .2.09.2.2v.86a.75.75 0 0 0 1.5 0v-1.07a2.085 2.085 0 0 0 1.903-1.589c.062-.25.062-.512.062-.99 0-.886 0-1.33-.1-1.74"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.832 11.207h13.57c.27 0 .5-.22.5-.5v-.35a.3.3 0 0 0-.3-.3h-1.62c-.56 0-1.07-.32-1.33-.82s-.21-1.1.12-1.56l.468-.713c.04-.06.01-.142-.056-.17a.13.13 0 0 0-.17.058c-.226.443-.54.565-1.112.565h-1.64c-.56 0-1.08-.32-1.34-.82a1.48 1.48 0 0 1-.09-1.11c.071-.234-.08-.52-.323-.52H7.992c-.68 0-1.02 0-1.34.12-.56.2-1 .64-1.21 1.21-.11.33-.11.68-.11 1.33v3.08c0 .28.22.5.5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.31 4.375h.183l-.791 1.103a.75.75 0 0 0 .609 1.187h1.643a.75.75 0 0 0 0-1.5h-.182l.79-1.102a.75.75 0 0 0-.609-1.188h-1.642a.75.75 0 0 0 0 1.5M18.037 5.935h.96l-1.569 2.183a.748.748 0 0 0 .609 1.187h2.423a.75.75 0 0 0 0-1.5h-.96l1.57-2.182a.75.75 0 0 0-.61-1.188h-2.423a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBedSleepingBulk;
